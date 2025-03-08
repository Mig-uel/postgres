# Database-Side Validation and Constraints

## 3 Different Forms of Row-Level Validation

**Row-Level Validation** is the process of ensuring that the data in a row meets certain criteria or constraints. This can be done using various techniques, such as:

1. **Data Type Validation**: Ensures that the data in a column is of the correct type (e.g., integer, text, date).
2. **Length Validation**: Ensures that the length of the data in a column is within a specified range.
3. **Value Validation**: Ensures that the data in a column meets certain criteria (e.g., positive numbers, valid email addresses).
4. **Uniqueness Validation**: Ensures that the data in a column is unique across all rows in the table.

<hr/>

Things we can check for when a row is being inserted or updated:

- Is a given value defined?
- Is a value unique in its column?
- Is a value >, <, >=, <=, =, some other value?

## Applying a NULL Constraint

A **NULL constraint** is used to ensure that a column does not contain any NULL values. This can be done by adding the `NOT NULL` constraint to the column definition when creating a table.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT NOT NULL
);
```

In this example, the `name`, `email`, and `age` columns are defined with the `NOT NULL` constraint, which means that these columns cannot contain NULL values.

We can also add a `NOT NULL` constraint to an existing column using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
ALTER COLUMN age SET NOT NULL;
```

This will ensure that the `age` column in the `users` table does not contain any NULL values.

We can also remove the `NOT NULL` constraint from a column using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
ALTER COLUMN age DROP NOT NULL;
```

This will allow the `age` column in the `users` table to contain NULL values.

Sometimes, a column may already contain NULL values, and we want to add a `NOT NULL` constraint to it. In this case, we can use the `SET DEFAULT` clause to provide a default value for the column.

```sql
ALTER TABLE users
ALTER COLUMN age SET DEFAULT 0;
```

This will set the default value of the `age` column to `0` for any existing rows that contain NULL values.

We can then add the `NOT NULL` constraint to the column.

```sql
ALTER TABLE users
ALTER COLUMN age SET NOT NULL;
```

This will ensure that the `age` column does not contain any NULL values.
