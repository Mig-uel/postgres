# Unions and Intersections with Sets

Unions and intersections are two fundamental operations that can be performed on sets. The union of two sets $A$ and $B$ is the set of elements that are in $A$, in $B$, or in both. The intersection of two sets $A$ and $B$ is the set of elements that are in both $A$ and $B$.

In this section, we will explore how to perform unions and intersections on sets in SQL using the `UNION` and `INTERSECT` operators.

**Find the 4 products with the highest price and the 4 products with the highest price/weight ratio.**

```sql
(
  SELECT *
  FROM products
  ORDER BY price DESC
  LIMIT 4
) UNION (
  SELECT *
  FROM products
  ORDER BY price / weight DESC
  LIMIT 4
);
```

In this query, we first select the 4 products with the highest price using the `ORDER BY` and `LIMIT` clauses. We then use the `UNION` operator to combine this result with the 4 products with the highest price/weight ratio. The `ORDER BY` clause is used to sort the products based on the price/weight ratio in descending order.

- The `UNION` operator is used to combine the results of two or more `SELECT` statements into a single result set.
- The `UNION` operator removes duplicate rows from the result set.
- The `UNION ALL` operator is used to combine the results of two or more `SELECT` statements into a single result set, including duplicate rows.

# A Few Notes on Unions

- The `UNION` operator is used to combine the results of two or more `SELECT` statements into a single result set.
- The `UNION` operator removes duplicate rows from the result set.
- The `UNION ALL` operator is used to combine the results of two or more `SELECT` statements into a single result set, including duplicate rows.
- The number and order of columns in all `SELECT` statements must be the same when using the `UNION` operator.
- The data types of the corresponding columns in all `SELECT` statements must be compatible when using the `UNION` operator.

## Commonalities with Intersections

**INTERSECT** is another set operation that is used to combine the results of two or more `SELECT` statements into a single result set. The `INTERSECT` operator returns only the rows that are common to all `SELECT` statements.

- The `INTERSECT` operator removes duplicate rows from the result set.
- Finds the rows that are common in the results of two or more `SELECT` statements.

**INTERSECT ALL** is used to combine the results of two or more `SELECT` statements into a single result set, including duplicate rows.

**EXCEPT** is used to combine the results of two `SELECT` statements and returns only the rows that are present in the first result set but not in the second result set.

- Finds the rows that are present in the first result set but not in the second result set.
- The `EXCEPT` operator removes duplicate rows from the result set.

**EXCEPT ALL** is used to combine the results of two `SELECT` statements and returns only the rows that are present in the first result set but not in the second result set, including duplicate rows.

**UNION** is used to combine the results of two or more `SELECT` statements into a single result set.

- The `UNION` operator removes duplicate rows from the result set.

**UNION ALL** is used to combine the results of two or more `SELECT` statements into a single result set, including duplicate rows.

(sets are query results)
