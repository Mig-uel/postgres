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

## More on the WHERE Keyword

The `WHERE` clause is not only used in the `SELECT` statement, but it is also used in the `UPDATE`, `DELETE`, etc., which we will learn in the upcoming chapters.

## Operators in the WHERE Clause

The following operators can be used in the `WHERE` clause:

- `=`: Equal
- `<>` or `!=`: Not equal
- `>`: Greater than
- `<`: Less than
- `>=`: Greater than or equal
- `<=`: Less than or equal
- `BETWEEN`: Between an inclusive range
- `LIKE`: Search for a pattern
- `IN`: To specify multiple possible values for a column
- `NOT IN`: To specify multiple possible values for a column

```sql
SELECT name, area
FROM city
WHERE area = 8223;
```

The above SQL statement selects the `name` and `area` columns from the `city` table where the `area` is equal to 8223.

```sql
SELECT name, area
FROM city
WHERE area != 8223;
```

The above SQL statement selects the `name` and `area` columns from the `city` table where the `area` is not equal to 8223.

```sql
SELECT name, area
FROM city
WHERE area <> 8223;
```

The above SQL statement selects the `name` and `area` columns from the `city` table where the `area` is not equal to 8223.
