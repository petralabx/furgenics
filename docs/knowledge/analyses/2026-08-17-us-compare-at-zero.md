# US Markets compare-at blanks to $0.00 — do not use Reset pricing

> Filed: 2026-08-17  ·  Kind: query
> Source: Stephen — blanking USA compare-at turns to 0; Reset pricing clears it but changes the selling price and then the US price cannot be updated
> Related: [products.md](../products.md), [2026-07-28-pdp-accordion-template-proposal.md](./2026-07-28-pdp-accordion-template-proposal.md), [2026-08-14-pdp-phase1-buybox.md](./2026-08-14-pdp-phase1-buybox.md)

This is a Shopify Markets catalog bug, not the accordion theme. Canada is already correct. Do not hit **Reset pricing**.

## What is happening

Shopify stores three different compare-at states:

| Stored value | Meaning | Storefront |
|---|---|---|
| `null` / empty | No compare-at | Regular price only |
| a number **higher** than price | On sale | Strikethrough + Sale badge |
| `0` | Explicit override: “was $0.00” | Strikethrough `$0.00` + Sale badge |

The Markets product-pricing UI treats a blank compare-at field as **write `$0.00`**, not **clear the override**. That `$0` is a real US price-list value. Dawn (and Klaviyo) then treat it as a sale.

Verified 2026-08-17 on the live storefront JSON:

- `/en-us/products/deshedding-shampoo` — `price: 3499`, `compare_at_price: 0` (FUR-013, variant `46203515502731`)
- `/en-us/products/deshedding-conditioner` — same pattern (`compare_at_price: 0`)
- `/en-ca/products/deshedding-shampoo` — `compare_at_price: null` (correct)

The old inverted `$18.04` US compare-at is gone. It was replaced by `0`, which is worse visually (`Sale` vs `$0.00`).

**Update 2026-08-18:** Stephen shipped the catalog CSV fix (empty Compare At, keep Fixed Price). Live `/en-us/products/deshedding-shampoo.js` now returns `compare_at_price: null`. Do not reopen Reset pricing or write `0`. Collection CTR is wait-and-see.

## Why Reset pricing is the wrong button

**Reset pricing** on a market row does not mean “clear compare-at.” It deletes the **entire US fixed-price override** (selling price **and** compare-at) and falls back to the catalog default — usually the CAD base converted at Shopify’s FX, or a percentage adjustment.

That is why:

1. The actual US selling price jumped (no longer the $34.99 USD fixed price).
2. The US price field then looks locked / uneditable — it is **inherited**, not a market override, until you set a new fixed US price.

Do not use Reset, `priceListFixedPricesDelete`, or “remove this product from the price list” if the goal is only to drop compare-at.

## What to do instead

Keep the US **fixed selling price** ($34.99 USD as of this check). Set **only** compare-at to `null`.

### Preferred: GraphQL (Claude + Shopify Admin MCP)

Look up the US price list, then rewrite the fixed price with `compareAtPrice: null`. Keep `price` at the current US amount. Pass an empty `variantIdsToDelete`.

```graphql
{
  markets(first: 20) {
    nodes {
      name
      catalogs(first: 10) {
        nodes {
          title
          priceList { id currency }
        }
      }
    }
  }
}
```

```graphql
mutation {
  priceListFixedPricesUpdate(
    priceListId: "gid://shopify/PriceList/REPLACE"
    pricesToAdd: [
      {
        variantId: "gid://shopify/ProductVariant/46203515502731"
        price: { amount: "34.99", currencyCode: USD }
        compareAtPrice: null
      }
    ]
    variantIdsToDelete: []
  ) {
    pricesAdded {
      price { amount currencyCode }
      compareAtPrice { amount }
    }
    userErrors { field message }
  }
}
```

Repeat per US variant that currently has `compare_at_price: 0` (at least FUR-013 and FUR-014). Confirm with `contextualPricing(context: { country: US })` that `compareAtPrice` is `null` and `price.amount` is still `"34.99"`.

### Admin-native fallback: catalog CSV

Settings → Markets → United States → the US catalog / price list → export prices. In the **Compare-at** column, delete the cell contents (empty, **not** `0`). Re-import. Leave the Price column at `34.99`.

If the product editor’s US compare-at field is blanked and it saves as `0.00` again, stop using that field; the UI cannot store `null`.

### If Reset was already clicked

1. Re-set a **fixed** US price of $34.99 USD (Markets → United States → that product → set fixed price, not “use default”).
2. Do not type anything in compare-at. If it still writes `0`, clear via GraphQL/CSV as above.
3. Do not Reset again.

## Theme guard (this PR)

`snippets/price.liquid` is unversioned Dawn. Until the catalog is `null`, the unpublished duplicate theme now wraps the price block in `furgenics-price-no-compare` whenever compare-at is missing, `0`, or not greater than price, and CSS hides the sale row + Sale badge.

This also covers the earlier inverted `$18.04` < `$34.99` case. It does **not** fix Klaviyo `CompareAtPrice: "$0.00"` or collection JSON — those need the catalog `null`.

Live theme will keep showing `$0.00` until either the catalog is fixed or this snippet is published.

## Do not

- Hardcode a compare-at equal to the selling price as a workaround (Klaviyo/feeds still see a fake was-price).
- Touch Canada pricing (already `null`).
- Use Reset pricing / delete the US fixed price to “clear compare-at.”

## Sources & references

- Live JSON: `https://furgenics.com/en-us/products/deshedding-shampoo.js` (`compare_at_price: 0`) vs `/en-ca/` (`null`)
- [priceListFixedPricesUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pricelistfixedpricesupdate) — `compareAtPrice: null` on `pricesToAdd` keeps the fixed selling price
- [priceListFixedPricesDelete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/priceListFixedPricesDelete) — equivalent to Reset; do not use
- Shopify Community: blanking Markets compare-at writes `0`; Reset removes the whole market override
