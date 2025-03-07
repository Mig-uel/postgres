# Selecting DISTINCT Records

We can select distinct records from a table by using the DISTINCT keyword. The DISTINCT keyword is used in the SELECT statement to remove duplicate rows from the result set.

```sql
SELECT DISTINCT department
FROM products;
```

In the example above, we are selecting distinct department names from the products table. This query will return a list of unique department names without any duplicates.

The DISTINCT keyword can be used with multiple columns to remove duplicates based on the combination of those columns. For example:

```sql
SELECT DISTINCT department, category
FROM products;
```

This query will return unique combinations of department and category from the products table.

The DISTINCT keyword is useful when we want to retrieve unique values from a column or a combination of columns in a table.
