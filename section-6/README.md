# Sorting Records

**Sorting** is a common operation in data processing. It is the process of arranging items in a specific order. Sorting can be done in ascending or descending order.

In SQL, we can sort records using the `ORDER BY` clause. The `ORDER BY` clause is used to sort the result set based on one or more columns. By default, the sorting is done in ascending order, but we can specify the order explicitly.

**Example:**

```sql
SELECT *
FROM products
ORDER BY price;
```

In this example, we are sorting the records in the `products` table based on the `price` column in ascending order.

- By default, the `ORDER BY` clause sorts the result set in ascending order.

**Sorting in Descending Order:**

```sql
SELECT *
FROM products
ORDER BY price DESC;
```

In this example, we are sorting the records in the `products` table based on the `price` column in descending order.

- We can specify the sorting order using the `DESC` keyword after the column name.

## Two Variations of Sorting

We cannot also sort integers but also strings. When sorting strings, the sorting is done based on the ASCII values of the characters.

**Example:**

```sql
SELECT *
FROM products
ORDER BY name;
```

In this example, we are sorting the records in the `products` table based on the `name` column in ascending order.

**Sorting Multiple Columns:**

```sql
SELECT *
FROM products
ORDER BY price, weight;
```

In this example, we are sorting the records in the `products` table based on the `price` column in ascending order. If two records have the same price, they will be sorted based on the `weight` column.

- The `ORDER BY` clause can be used to sort the result set based on multiple columns.
- The sorting is done in the order of columns specified in the `ORDER BY` clause.

## Offset and Limit

In some cases, we may want to retrieve a subset of the sorted records. We can use the `OFFSET` and `LIMIT` clauses to achieve this.

**OFFSET:** The `OFFSET` clause is used to skip a specified number of rows before starting to return the result set.

- `OFFSET 5` will skip the first 5 rows in the result set.

**LIMIT:** The `LIMIT` clause is used to limit the number of rows returned in the result set.

- `LIMIT 10` will return only the first 10 rows in the result set.

**OFFSET Example:**

```sql
SELECT *
FROM products
OFFSET 5;
```

In this example, we are skipping the first 5 rows in the `products` table and returning the rest of the records.

**LIMIT Example:**

```sql
SELECT *
FROM products
LIMIT 10;
```

In this example, we are returning only the first 10 rows from the `products` table.

**Combining OFFSET and LIMIT:**

```sql
SELECT *
FROM products
ORDER BY price
OFFSET 5
LIMIT 10;
```

In this example, we are sorting the records in the `products` table based on the `price` column in ascending order, skipping the first 5 rows, and returning the next 10 rows.

- The `OFFSET` and `LIMIT` clauses can be combined with the `ORDER BY` clause to retrieve a subset of the sorted records.
