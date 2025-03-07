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
