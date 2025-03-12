# Implementing Database Design Patterns

## Back to Postgres

In the previous section, we discussed the different types of database design patterns. In this section, we will implement some of these patterns using Postgres.

**Moving Forward:**

- We will use Postgres to implement the database design patterns.
- We will create a new database using PGAdmin.
- Convert our ERD into a database schema.
- Insert data into the database tables.
- Write some queries.
- Realize that a few thing could have been designed better and make some changes.

## Creating Tables with Checks

**NOT NULL Constraint:** a value must be provided for the column when a new row is inserted.
(empty strings are values)

**DEFAULT Constraint:** provides a default value for a column when no value is specified.

When to apply either constraint?

- If it doesn't matter if a value is provided, don't apply a constraint.
- If we want the user to provide a value 100% of the time, apply a NOT NULL constraint.
- If we always want a value, but it's optional, apply a DEFAULT constraint with a NOT NULL constraint.

```sql
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	username VARCHAR(30) NOT NULL,
	bio VARCHAR(400),
	avatar VARCHAR(200),
	phone VARCHAR(25),
	email VARCHAR(40),
	password VARCHAR(50) NOT NULL,
	status VARCHAR(15),

	CHECK(COALESCE(phone, email) IS NOT NULL)
);
```

This query creates a table called `users` with the following columns:

- `id`: a serial column that auto-increments and serves as the primary key.
- `created_at` and `updated_at`: columns that store the timestamp of when the row was created and last updated.
- `username`, `bio`, `avatar`, `phone`, `email`, `password`, and `status`: columns that store user information.
- `CHECK(COALESCE(phone, email) IS NOT NULL)`: a check constraint that ensures either the `phone` or `email` column has a value.

## Creating the Posts Table

```sql
CREATE TABLE posts (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	url VARCHAR(200) NOT NULL,
	caption VARCHAR(240),
	lat REAL CHECK(lat IS NULL OR (lat >= -90 AND lat <- 90)),
	lng REAL CHECK(lng is NULL OR (lng >= -180 AND lng <= 180)),

	user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	CHECK((lat IS NULL) = (lng IS NULL))
);
```

This query creates a table called `posts` with the following columns:

- `id`: a serial column that auto-increments and serves as the primary key.
- `created_at` and `updated_at`: columns that store the timestamp of when the row was created and last updated.
- `url`: a column that stores the URL of the post.
- `caption`: a column that stores the caption of the post.
- `lat` and `lng`: columns that store the latitude and longitude of the post location.
- `user_id`: a foreign key column that references the `id` column in the `users` table.
- `CHECK((lat IS NULL) = (lng IS NULL))`: a check constraint that ensures either both `lat` and `lng` are provided or both are NULL.
