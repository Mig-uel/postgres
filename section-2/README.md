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

## Compound WHERE Clauses

You can use the `AND` and `OR` operators to combine two or more conditions in the `WHERE` clause.

```sql
SELECT name, area
FROM city
WHERE area BETWEEN 2000 AND 5000;
```

The above SQL statement selects the `name` and `area` columns from the `city` table where the `area` is between 2000 and 5000.

```sql
SELECT name, area
FROM city
WHERE name IN ('Mumbai', 'Delhi');
```

The above SQL statement selects the `name` and `area` columns from the `city` table where the `name` is either 'Mumbai' or 'Delhi'.

```sql
SELECT name, area
FROM city
WHERE name NOT IN ('Mumbai', 'Delhi');
```

The above SQL statement selects the `name` and `area` columns from the `city` table where the `name` is neither 'Mumbai' nor 'Delhi'.

```sql
SELECT name, area
FROM city
WHERE area NOT IN (3043, 8223)
AND
name = 'Delhi';
```

The above SQL statement selects the `name` and `area` columns from the `city` table where the `area` is neither 3043 nor 8223 and the `name` is 'Delhi'.

```sql
SELECT name, area
FROM city
WHERE area NOT IN (3043, 8223)
OR
name = 'Delhi';
```

The above SQL statement selects the `name` and `area` columns from the `city` table where the `area` is neither 3043 nor 8223 or the `name` is 'Delhi'.

## Calculations in WHERE Clause

You can also perform calculations in the `WHERE` clause.

```sql
SELECT name, population
FROM city
WHERE population / area > 6000;
```

The above SQL statement selects the `name` and `population` columns from the `city` table where the population divided by the area is greater than 6000.

## Updating Records with WHERE

The `WHERE` clause is also used in the `UPDATE` statement to update records based on a condition.

```sql
UPDATE cities
SET population = 39505000
WHERE name = 'Tokyo';
```

The above SQL statement updates the `population` column in the `cities` table to 39505000 where the `name` is 'Tokyo'.

## Deleting Records with WHERE

The `WHERE` clause is also used in the `DELETE` statement to delete records based on a condition.

```sql
DELETE FROM cities
WHERE name = 'Tokyo';
```

The above SQL statement deletes the record from the `cities` table where the `name` is 'Tokyo'.
