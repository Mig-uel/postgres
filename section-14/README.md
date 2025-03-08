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

Or, we can update the existing rows to set a non-NULL value for the column.

```sql
UPDATE users
SET age = 0
WHERE age IS NULL;
```

This will update any rows in the `users` table where the `age` column is NULL and set the value to `0`.

## Default Column Values

A **default value** is a value that is automatically assigned to a column when a new row is inserted into a table. This can be useful when you want to provide a default value for a column if no value is specified during the insert operation.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT NOT NULL DEFAULT 0
);
```

In this example, the `age` column is defined with a default value of `0`, which means that if no value is specified for the `age` column during an insert operation, the value `0` will be assigned to the column.

We can also add a default value to an existing column using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
ALTER COLUMN age SET DEFAULT 0;
```

This will set the default value of the `age` column to `0` for any new rows that are inserted into the `users` table without specifying a value for the `age` column.

We can also remove the default value from a column using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
ALTER COLUMN age DROP DEFAULT;
```

This will remove the default value from the `age` column in the `users` table.

## Applying a Unique Constraint

A **unique constraint** is used to ensure that the data in a column is unique across all rows in a table. This can be done by adding the `UNIQUE` constraint to the column definition when creating a table.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT NOT NULL
);
```

In this example, the `email` column is defined with the `UNIQUE` constraint, which means that the data in this column must be unique across all rows in the `users` table.

We can also add a `UNIQUE` constraint to an existing column using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE (email);
```

This will add a `UNIQUE` constraint to the `email` column in the `users` table, ensuring that the data in this column is unique across all rows.

We can also remove a `UNIQUE` constraint from a column using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
DROP CONSTRAINT unique_email;
```

This will remove the `UNIQUE` constraint from the `email` column in the `users` table.

## Multi-Column Uniqueness

A **multi-column uniqueness constraint** is used to ensure that the combination of values in multiple columns is unique across all rows in a table. This can be done by adding a `UNIQUE` constraint to a combination of columns when creating a table.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    UNIQUE (first_name, last_name)
);
```

In this example, the combination of the `first_name` and `last_name` columns is defined with a `UNIQUE` constraint, which means that the combination of values in these columns must be unique across all rows in the `users` table.

We can also add a multi-column uniqueness constraint to an existing table using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
ADD CONSTRAINT unique_name UNIQUE (first_name, last_name);
```

This will add a multi-column uniqueness constraint to the `first_name` and `last_name` columns in the `users` table, ensuring that the combination of values in these columns is unique across all rows.

We can also remove a multi-column uniqueness constraint from a table using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
DROP CONSTRAINT unique_name;
```

This will remove the multi-column uniqueness constraint from the `first_name` and `last_name` columns in the `users` table.

## Applying a Check Constraint

A **check constraint** is used to ensure that the data in a column meets certain criteria or conditions. This can be done by adding the `CHECK` constraint to the column definition when creating a table.

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT NOT NULL
    CHECK (age >= 18)
);
```

In this example, the `age` column is defined with a `CHECK` constraint that ensures the data in this column is greater than or equal to `18`. This means that any value inserted into the `age` column must be `18` or higher.

We can also add a `CHECK` constraint to an existing column using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
ADD CONSTRAINT check_age CHECK (age >= 18);
```

This will add a `CHECK` constraint to the `age` column in the `users` table, ensuring that the data in this column meets the specified criteria.

We can also remove a `CHECK` constraint from a column using the `ALTER TABLE` statement.

```sql
ALTER TABLE users
DROP CONSTRAINT check_age;
```

This will remove the `CHECK` constraint from the `age` column in the `users` table.

## Checks on Multiple Columns

A **check constraint** can also be applied to multiple columns to enforce certain conditions across those columns. This can be done by adding a `CHECK` constraint to a combination of columns when creating a table.

```sql
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    est_delivery TIMESTAMP NOT NULL,
    CHECK (created_at < est_delivery)
);
```

In this example, the `CHECK` constraint ensures that the `created_at` timestamp is less than the `est_delivery` timestamp for each row in the `orders` table.

We can also add a multi-column `CHECK` constraint to an existing table using the `ALTER TABLE` statement.

```sql
ALTER TABLE orders
ADD CONSTRAINT check_delivery CHECK (created_at < est_delivery);
```

This will add a multi-column `CHECK` constraint to the `created_at` and `est_delivery` columns in the `orders` table, ensuring that the `created_at` timestamp is less than the `est_delivery` timestamp for each row.

We can also remove a multi-column `CHECK` constraint from a table using the `ALTER TABLE` statement.

```sql
ALTER TABLE orders
DROP CONSTRAINT check_delivery;
```

This will remove the multi-column `CHECK` constraint from the `created_at` and `est_delivery` columns in the `orders` table.

## So Where Should We Be Applying Validation?

- **Client-Side Validation**: Ensures that the data entered by the user is valid before sending it to the server. This can be done using JavaScript or other client-side technologies.
- **Server-Side Validation**: Ensures that the data received from the client is valid before processing it further. This can be done using server-side technologies such as Node.js, Python, or Java.
- **Database-Side Validation**: Ensures that the data stored in the database meets certain criteria or constraints. This can be done using database constraints such as `NOT NULL`, `UNIQUE`, and `CHECK`.

It is important to apply validation at all three levels to ensure the integrity and security of the data in your application.

**Server-Side Validation**:

- Ensures that the data received from the client is valid before processing it further.
- Can be done using server-side technologies such as Node.js, Python, or Java.
- Easier to express more complex validation rules.
- Far easier to apply, maintain, and update validation rules.
- Many libraries and frameworks provide built-in validation functionality.

**Database-Side Validation**:

- Ensures that the data stored in the database meets certain criteria or constraints.
- Can be done using database constraints such as `NOT NULL`, `UNIQUE`, and `CHECK`.
- Ensures data integrity at the database level.
- Can be more efficient for certain types of validation.
- Can be more secure as it is harder to bypass.
- Validation is still applied even if you connect with a different client.
- Guaranteed that validation is always applied, regardless of the client used.
- Can only apply new validation rules if all existing data meets the criteria.

**Client-Side Validation**:

- Ensures that the data entered by the user is valid before sending it to the server.
- Can be done using JavaScript or other client-side technologies.
- Provides immediate feedback to the user.
- Reduces the load on the server by preventing invalid data from being sent.
- Can be bypassed by disabling JavaScript or using other tools.
- Should not be relied upon as the sole source of validation.
