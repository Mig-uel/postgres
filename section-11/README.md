# Utility Operators, Keywords, and Functions

## The Greatest Value in a List

The `GREATEST` function is used to find the greatest value in a list of expressions. It takes a list of expressions as arguments and returns the greatest value among them.

**Example**

```sql
SELECT GREATEST(10, 20, 30, 40);
```

In the example above, the `GREATEST` function is used to find the greatest value among the numbers 10, 20, 30, and 40. The result of this query will be 40.

The `GREATEST` function can take any number of arguments and can be used with different data types such as integers, decimals, and strings.

**Compute the cost to ship each item. Shipping is the maximum of (weight \* 2) or $30.**

```sql
SELECT name, GREATEST(weight * 2, 30) AS shipping_cost
FROM products;
```

In the example above, we are calculating the shipping cost for each item in the `products` table. The shipping cost is calculated as the maximum of `(weight * 2)` or `$30` using the `GREATEST` function.
