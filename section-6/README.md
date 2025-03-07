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
