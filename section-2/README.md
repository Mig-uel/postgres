# Filtering Records

## Filtering Rows with WHERE

The `WHERE` clause is used to filter records. The `WHERE` clause is used to extract only those records that fulfill a specified condition.

```sql
SELECT name, area
FROM city
WHERE population > 4000;
```

The above SQL statement selects the `name` and `area` columns from the `city` table where the `population` is greater than 4000.

**Order of the SQL clauses**:

1. `FROM` - specifies the table
2. `WHERE` - filters the records
3. `SELECT` - selects the columns
