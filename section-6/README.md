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
