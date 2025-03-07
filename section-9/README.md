# Assembling Queries with Subqueries

## What is a Subquery?

A subquery is a query within a query. It is a SELECT statement that is nested within another SELECT statement. A subquery is also called an inner query or inner select, while the statement containing a subquery is also called an outer query or outer select.

Subqueries are used to retrieve data from one or more tables based on a specific condition. They can be used in various parts of a SQL query, such as the WHERE clause, FROM clause, or SELECT statement.

**List the name and price of all products that are more expensive than all products in the 'Toys' department.**

**Easy Way:**

```sql
SELECT name, price
FROM products
WHERE price > 876;
```

In the above query, we have hardcoded the price value `876` which is the price of the most expensive product in the 'Toys' department. This approach is not scalable and requires manual intervention to update the query when the data changes.

**Using Subquery:**

```sql
SELECT name, price
FROM products
WHERE price > (
    SELECT MAX(price)
    FROM products
    WHERE department = 'Toys'
) AND department != 'Toys';
```

In the above query, we use a subquery to find the maximum price of products in the 'Toys' department. This value is then used as a comparison in the outer query to retrieve products that are more expensive than the most expensive product in the 'Toys' department.

- The subquery `(SELECT MAX(price) FROM products WHERE department = 'Toys')` retrieves the maximum price of products in the 'Toys' department.
- The outer query `SELECT name, price FROM products WHERE price > (...) AND department != 'Toys';` retrieves the name and price of products that are more expensive than the maximum price in the 'Toys' department.

## Thinking About the Structure of Data

When working with subqueries, it is essential to think about the structure of the data and how the subquery will interact with the outer query. Understanding the relationships between tables and the data being retrieved is crucial for writing efficient and effective queries.

Subqueries can be used to filter, aggregate, or compare data from different tables or columns within the same table. They provide a powerful way to manipulate and retrieve data based on specific conditions or criteria.

Subqueries can be used as:

- A source of value
- A source of rows
- A source of tables
- A source of columns

**Understanding the shape of a query result is key!**

```sql
SELECT *
FROM orders
```

This query will return multiple rows and columns.

```sql
SELECT id
FROM orders
```

This query will return multiple rows but only one column.

```sql
SELECT COUNT(*)
FROM orders
```

This query will return a single row and a single column. It is a scalar query. Whenever we get back one row and one column (single value), it is called a scalar query.

## Subquery in a SELECT Statement

We can insert subqueries in multiple parts of a SQL query. One common use case is to include a subquery in the SELECT statement to retrieve additional information or perform calculations based on the data in the database.

If you want to add a subquery in the SELECT statement, you need to ensure that the subquery returns a single value (scalar value). Otherwise, you will encounter an error when executing the query.

- Any subquery that returns a single value can be used in the SELECT statement.
- The subquery must be enclosed in parentheses and placed in the SELECT clause.

**Example:**

```sql
SELECT MAX(price)
FROM products;
```

This query will return a single value (the maximum price from the 'products' table) and can be used in the SELECT statement.

```sql
SELECT name, price, (
    SELECT MAX(price)
    FROM products
) AS max_price
FROM products;
```

In this query, we include a subquery `(SELECT MAX(price) FROM products)` in the SELECT statement to retrieve the maximum price of products. The result of the subquery is aliased as `max_price` and displayed as an additional column in the output.

```sql
SELECT name, price, (
    SELECT price
    FROM products
    WHERE id = 3
) as id_3_price
FROM products
WHERE price > 876;
```

In this query, we include a subquery `(SELECT price FROM products WHERE id = 3)` in the SELECT statement to retrieve the price of the product with `id = 3`. The result of the subquery is aliased as `id_3_price` and displayed as an additional column in the output.

## Subquery in a FROM Clause

Subqueries can also be used in the FROM clause of a SQL query. When a subquery is used in the FROM clause, it acts as a derived table or subquery table that can be referenced in the outer query.

- A subquery in the FROM clause is treated as a temporary table that can be used to filter, join, or aggregate data.
- The subquery must be enclosed in parentheses and given an alias to reference it in the outer query.
- Any subquery, so long as the outer selects/wheres/etc are compatible with the subquery, can be used in the FROM clause.

**Example:**

```sql
SELECT name, price_weight_ratio
FROM (
    SELECT name, price / weight AS price_weight_ratio
    FROM products
) AS derived_table
WHERE price_weight_ratio > 10;
```

In this query, we use a subquery `(SELECT name, price / weight AS price_weight_ratio FROM products)` in the FROM clause to calculate the price-to-weight ratio for each product. The result of the subquery is aliased as `derived_table` and used in the outer query to filter products with a price-to-weight ratio greater than 10.

## FROM Subqueries that Return Values

We do not have to use subqueries that return rows. We can also use subqueries that return values as long as the outer query is compatible with the subquery.

```sql
SELECT *
FROM (
    SELECT MAX(price)
    FROM products
) AS derived_table;
```

In this query, the subquery `(SELECT MAX(price) FROM products)` returns a single value (the maximum price from the 'products' table). The result of the subquery is aliased as `derived_table` and displayed as a single row and single column in the output.

## Example of Subquery in a FROM Clause

**Find the average number of orders for all users.**

```sql
SELECT AVG(order_count)
FROM (
    SELECT user_id, COUNT(*) AS order_count
    FROM orders
    GROUP BY user_id
) AS user_order_counts;
```

In this query, we use a subquery `(SELECT user_id, COUNT(*) AS order_count FROM orders GROUP BY user_id)` in the FROM clause to calculate the number of orders for each user. The result of the subquery is aliased as `user_order_counts` and used in the outer query to find the average number of orders for all users.

## Subquery in a JOIN Clause

Subqueries can also be used in the JOIN clause of a SQL query to filter or join data from different tables based on specific conditions.

- A subquery in the JOIN clause can be used to filter rows from one table based on the results of another table.
- The subquery must be enclosed in parentheses and given an alias to reference it in the JOIN clause.
- Subqueries in the JOIN clause can be used to perform complex joins or filter data based on specific criteria.
- Any subquery that returns data compatible with the JOIN clause can be used in the JOIN clause.

**Example:**

```sql
SELECT first_name,
FROM users
JOIN (
  SELECT user_id
  FROM orders
  WHERE product_id = 3
) AS user_orders
ON users.id = user_orders.user_id;
```

In this query, we use a subquery `(SELECT user_id FROM orders WHERE product_id = 3)` in the JOIN clause to filter users who have ordered a specific product (product_id = 3). The result of the subquery is aliased as `user_orders` and used in the JOIN clause to join the 'users' table with the filtered orders.

## Subquery in a WHERE Clause

Subqueries can be used in the WHERE clause of a SQL query to filter data based on specific conditions or criteria.

- A subquery in the WHERE clause can be used to filter rows based on the results of another query.
- The subquery must return a single value or a list of values that can be compared with the outer query.
- Subqueries in the WHERE clause can be used to filter data based on complex conditions or criteria.
- Structure of data allowed to be returned by the subquery changes depending on the operator used in the WHERE clause.

**Show the id of orders that involve a product with a price/weight ratio greater than 5:**

```sql
SELECT id
FROM orders
WHERE product_id IN (
    SELECT id
    FROM products
    WHERE price / weight > 50
);
```

In this query, we use a subquery `(SELECT id FROM products WHERE price / weight > 50)` in the WHERE clause to filter orders that involve a product with a price-to-weight ratio greater than 5. The result of the subquery is used to filter the 'orders' table based on the product_id.

## Data Structure with WHERE Subqueries

When using subqueries in the WHERE clause, it is essential to understand the structure of the data returned by the subquery and how it interacts with the outer query.

- The subquery in the WHERE clause must return a single value or a list of values that can be compared with the outer query.
- The structure of the data returned by the subquery must match the data type and format expected by the operator used in the WHERE clause.
- Subqueries in the WHERE clause can be used to filter data based on specific conditions or criteria.

| Operator | Subquery Return Data Structure |
| -------- | ------------------------------ |
| >        | Single Value                   |
| <        | Single Value                   |
| >=       | Single Value                   |
| <=       | Single Value                   |
| =        | Single Value                   |
| <> or != | Single Value                   |
| IN       | List of Values                 |
| NOT IN   | List of Values                 |

**Show the name of all products with a price greater than the average product price:**

```sql
SELECT name
FROM products
WHERE price > (
    SELECT AVG(price)
    FROM products
);
```

In this query, we use a subquery `(SELECT AVG(price) FROM products)` in the WHERE clause to find the average price of products. The result of the subquery is used to filter the 'products' table based on the price of each product.

## The NOT IN Operator with a List

The `NOT IN` operator can be used with a list of values returned by a subquery to filter data based on specific conditions.

- The `NOT IN` operator is used to exclude rows that match any value in the list returned by the subquery.

**Show the name of all products that are not in the same department as products with a price less than 100:**

```sql
SELECT name, department
FROM products
WHERE department NOT IN (
    SELECT department
    FROM products
    WHERE price < 100
);
```

In this query, we use a subquery `(SELECT department FROM products WHERE price < 100)` in the WHERE clause to find the departments of products with a price less than 100. The result of the subquery is used to filter the 'products' table based on the department of each product.

## A New WHERE Operator

| Operator                   | Subquery Return Data Structure |
| -------------------------- | ------------------------------ |
| > ALL                      | Single Column                  |
| < ALL                      | Single Column                  |
| >= ALL                     | Single Column                  |
| <= ALL                     | Single Column                  |
| = ALL                      | Single Column                  |
| <> ALL or != ALL           | Single Column                  |
| > SOME/ANY                 | Single Column                  |
| < SOME/ANY                 | Single Column                  |
| >= SOME/ANY                | Single Column                  |
| <= SOME/ANY                | Single Column                  |
| = SOME/ANY                 | Single Column                  |
| <> SOME/ANY or != SOME/ANY | Single Column                  |

**Show the name, department, and price of products that are more expensive than all products in the 'Industrial' department:**

```sql
SELECT name, department, price
FROM products
WHERE price > ALL (
    SELECT price
    FROM products
    WHERE department = 'Industrial'
);
```

In this query, we use the `ALL` operator with a subquery `(SELECT price FROM products WHERE department = 'Industrial')` in the WHERE clause to find products that are more expensive than all products in the 'Industrial' department. The result of the subquery is used to filter the 'products' table based on the price of each product.

## SOME/ANY Operator with a Subquery

The `SOME` or `ANY` operator can be used with a subquery to filter data based on specific conditions.

- The `SOME` or `ANY` operator is used to include rows that match any value in the list returned by the subquery.
- The `SOME` or `ANY` operator is equivalent and can be used interchangeably.

**Show the name of products that are more expensive than at least one product in the 'Industrial' department:**

```sql
SELECT name
FROM products
WHERE price > SOME (
    SELECT price
    FROM products
    WHERE department = 'Industrial'
);
```

In this query, we use the `SOME` operator with a subquery `(SELECT price FROM products WHERE department = 'Industrial')` in the WHERE clause to find products that are more expensive than at least one product in the 'Industrial' department. The result of the subquery is used to filter the 'products' table based on the price of each product.

## Probably Too Much About Correlated Subqueries

A correlated subquery is a subquery that depends on the outer query for its values. The subquery is executed for each row processed by the outer query and can reference columns from the outer query.

- A correlated subquery is executed once for each row processed by the outer query.
- The subquery can reference columns from the outer query.
- Correlated subqueries can be used to filter, aggregate, or compare data based on specific conditions.

**Show the name, department, and price of the most expensive product in each department:**

```sql
SELECT name, department, price
FROM products as p1
WHERE price = (
    SELECT MAX(price)
    FROM products as p2
    WHERE p1.department = p2.department
);
```

In this query, we use a correlated subquery `(SELECT MAX(price) FROM products as p2 WHERE p1.department = p2.department)` in the WHERE clause to find the most expensive product in each department. The subquery is correlated with the outer query by referencing the `department` column from the outer query.

## More on Correlated Subqueries

**Without using a join or a group by, print the number of orders for each product:**

```sql
SELECT name, (
    SELECT COUNT(*)
    FROM orders
    WHERE orders.product_id = products.id
) AS order_count
FROM products
```

In this query, we use a correlated subquery `(SELECT COUNT(*) FROM orders WHERE orders.product_id = products.id)` in the SELECT statement to find the number of orders for each product. The subquery is correlated with the outer query by referencing the `product_id` column from the outer query.
