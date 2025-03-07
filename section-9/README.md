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
