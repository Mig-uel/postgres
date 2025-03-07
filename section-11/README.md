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

## The Least Value in a List

The `LEAST` function is used to find the least value in a list of expressions. It takes a list of expressions as arguments and returns the least value among them.

**Example**

```sql
SELECT LEAST(10, 20, 30, 40);
```

In the example above, the `LEAST` function is used to find the least value among the numbers 10, 20, 30, and 40. The result of this query will be 10.

The `LEAST` function can take any number of arguments and can be used with different data types such as integers, decimals, and strings.

**All products are on sale! Price is the minimum of (price \* 0.5) or $400.**

```sql
SELECT name, LEAST(price * 0.5, 400) AS sale_price
FROM products;
```

In the example above, we are calculating the sale price for each item in the `products` table. The sale price is calculated as the minimum of `(price * 0.5)` or `$400` using the `LEAST` function.

## The COALESCE Function

The `COALESCE` function is used to return the first non-null value in a list of expressions. It takes a list of expressions as arguments and returns the first non-null value among them.

**Example**

```sql
SELECT COALESCE(NULL, 10, 20, 30);
```

In the example above, the `COALESCE` function is used to return the first non-null value among `NULL`, 10, 20, and 30. The result of this query will be 10.

The `COALESCE` function can take any number of arguments and can be used with different data types such as integers, decimals, and strings.

**Calculate the total cost of each order. If the shipping cost is NULL, assume it is $10.**

```sql
SELECT order_id, COALESCE(shipping_cost, 10) AS total_cost
```

In the example above, we are calculating the total cost of each order in the `orders` table. If the `shipping_cost` is `NULL`, we assume it is `$10` using the `COALESCE` function.

## The CASE Keyword

The `CASE` keyword is used to perform conditional logic in SQL queries. It allows you to define conditions and return different values based on those conditions.

**Example**

```sql
SELECT
  name,
  CASE
    WHEN price > 1000 THEN 'Expensive'
    WHEN price > 500 THEN 'Moderate'
    ELSE 'Affordable'
  END AS price_category
FROM products;
```

In the example above, we are categorizing the products in the `products` table based on their price. If the price is greater than `1000`, the product is categorized as `'Expensive'`. If the price is greater than `500`, the product is categorized as `'Moderate'`. Otherwise, the product is categorized as `'Affordable'`.

The `CASE` keyword can be used with multiple `WHEN` conditions and an optional `ELSE` condition to handle cases where none of the conditions are met. `END AS` is used to specify the alias for the resulting column.

**Print each product and its price. Also, print a description of the price. If price > 600, print 'high'. If price > 300, print 'medium'. Otherwise, print 'cheap'.**

```sql
SELECT
  name,
  price,
  CASE
    WHEN price > 600 THEN 'high'
    WHEN price > 300 THEN 'medium'
    ELSE 'cheap'
  END AS price_description
FROM products;
```

In the example above, we are printing each product and its price from the `products` table. We are also printing a description of the price based on the conditions specified in the `CASE` statement.
