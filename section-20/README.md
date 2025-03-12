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

## Creating the Comments Table

```sql
CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	contents VARCHAR(240) NOT NULL,
	user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE
);
```

This query creates a table called `comments` with the following columns:

- `id`: a serial column that auto-increments and serves as the primary key.
- `created_at` and `updated_at`: columns that store the timestamp of when the row was created and last updated.
- `contents`: a column that stores the contents of the comment.
- `user_id`: a foreign key column that references the `id` column in the `users` table.
- `post_id`: a foreign key column that references the `id` column in the `posts` table.

## Creating the Likes Table

```sql
CREATE TABLE likes (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,

	post_id INT REFERENCES posts(id) ON DELETE CASCADE,
	comment_id INT REFERENCES comments(id) ON DELETE CASCADE,

	CHECK(
		COALESCE((post_id)::BOOLEAN::INTEGER, 0)
		+
		COALESCE((comment_id)::BOOLEAN::INTEGER, 0)
		= 1
	),
	UNIQUE(user_id, post_id, comment_id)
);
```

This query creates a table called `likes` with the following columns:

- `id`: a serial column that auto-increments and serves as the primary key.
- `created_at`: a column that stores the timestamp of when the row was created.
- `user_id`: a foreign key column that references the `id` column in the `users` table.
- `post_id`: a foreign key column that references the `id` column in the `posts` table.
- `comment_id`: a foreign key column that references the `id` column in the `comments` table.
- `CHECK(COALESCE((post_id)::BOOLEAN::INTEGER, 0) + COALESCE((comment_id)::BOOLEAN::INTEGER, 0) = 1)`: a check constraint that ensures either the `post_id` or `comment_id` is provided, but not both.
- `UNIQUE(user_id, post_id, comment_id)`: a unique constraint that ensures a user can only like a post or comment once.

## Creating the Photo Tags and Captions Tags Tables

```sql
CREATE TABLE photo_tags (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

	user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,

	x int NOT NULL,
	y int NOT NULL,

	UNIQUE(user_id, post_id)
);
```

This query creates a table called `photo_tags` with the following columns:

- `id`: a serial column that auto-increments and serves as the primary key.
- `created_at` and `updated_at`: columns that store the timestamp of when the row was created and last updated.
- `user_id`: a foreign key column that references the `id` column in the `users` table.
- `post_id`: a foreign key column that references the `id` column in the `posts` table.
- `x` and `y`: columns that store the coordinates of the tag on the photo.
- `UNIQUE(user_id, post_id)`: a unique constraint that ensures a user can only tag a post once.

```sql
CREATE TABLE caption_tags (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

	user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
	post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,

	UNIQUE(user_id, post_id)
);
```

This query creates a table called `caption_tags` with the following columns:

- `id`: a serial column that auto-increments and serves as the primary key.
- `created_at`: a column that stores the timestamp of when the row was created.
- `user_id`: a foreign key column that references the `id` column in the `users` table.
- `post_id`: a foreign key column that references the `id` column in the `posts` table.
- `UNIQUE(user_id, post_id)`: a unique constraint that ensures a user can only tag a post once.

## Creating Hashtags, Hashtag Posts, and Followers Tables

```sql
CREATE TABLE hashtags (
	id SERIAL PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	title VARCHAR(20) NOT NULL UNIQUE
);
```

This query creates a table called `hashtags` with the following columns:

- `id`: a serial column that auto-increments and serves as the primary key.
- `created_at`: a column that stores the timestamp of when the row was created.
- `title`: a column that stores the title of the hashtag.

```sql
CREATE TABLE hashtags_posts (
	id SERIAL PRIMARY KEY,

	hashtag_id INT NOT NULL REFERENCES hashtags(id) ON DELETE CASCADE,
	post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE,

	UNIQUE(hashtag_id, post_id)
);
```

This query creates a table called `hashtags_posts` with the following columns:

- `id`: a serial column that auto-increments and serves as the primary key.
- `hashtag_id`: a foreign key column that references the `id` column in the `hashtags` table.
- `post_id`: a foreign key column that references the `id` column in the `posts` table.
- `UNIQUE(hashtag_id, post_id)`: a unique constraint that ensures a post can only have a hashtag once.

```sql
CREATE TABLE followers (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,

    leader_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    follower_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    UNIQUE (leader_id, follower_id),
    CHECK (leader_id <> follower_id)
);

```

This query creates a table called `followers` with the following columns:

- `id`: a serial column that auto-increments and serves as the primary key.
- `created_at`: a column that stores the timestamp of when the row was created.
- `leader_id`: a foreign key column that references the `id` column in the `users` table.
- `follower_id`: a foreign key column that references the `id` column in the `users` table.
- `UNIQUE(leader_id, follower_id)`: a unique constraint that ensures a user can only follow another user once.
- `CHECK(leader_id <> follower_id)`: a check constraint that ensures a user cannot follow themselves.
