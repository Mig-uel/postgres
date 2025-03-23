# Simplifying Queries with Views

## Most Popular Users

**Show the most popular users - the users who were tagged the most.**

```sql
WITH tags (user_id) AS (
  SELECT user_id
  FROM photo_tags
  UNION ALL
  SELECT user_id
  FROM caption_tags
)
SELECT username, COUNT(*)
FROM users
JOIN tags ON users.id = tags.user_id
GROUP BY username
ORDER BY COUNT(*) DESC
```

This query uses a Common Table Expression (CTE) to combine the results of two tables (`photo_tags` and `caption_tags`) into a single table called `tags`. The CTE is then used to count the number of times each user appears in the combined table, allowing us to identify the most popular users. We can also use a view to simplify the query further.

## A Possible Solution to Merging Tables

- We have had to find the union of two tables several times.
- There's no benefit to keeping these records in separate tables.
- Guess we had a bad design.
- Two possible solutions:
  - Merge the two tables, deleting the old tables and creating a new one.
  - Create a view that contains the union of the two tables.

The first option is the most straightforward, but it may not be feasible if the tables are large or if there are other dependencies on the original tables.

## Creating a View

The second option is to create a view that contains the union of the two tables. A view is a virtual table that is based on the result of a query. It allows us to simplify complex queries and make them easier to read and maintain.

- A view is a query that is stored in the database.
- A view is a fake table that has rows from other tables.
- These rows can be exact rows as they exist in the original tables or they can be modified rows, or computed rows.
- It can be referenced in any place a table can be referenced.
- Views don't actually create a new table or move data around.
- Views don't have to be used for a union, it can compute absolutely anything.
- Views can be compared to CTEs, but CTEs can only be used in the context of a single query, while views can be used in multiple queries.
- Views are similar to CTEs, but they are stored in the database and can be reused in multiple queries.

```sql
CREATE VIEW tags as (
  SELECT id, created_at, user_id, post_id, 'photo_tag' as type
  FROM photo_tags
  UNION ALL
  SELECT id, created_at, user_id, post_id, 'caption_tag' as type
  FROM caption_tags
)
```

- The `CREATE VIEW` statement creates a new view called `tags` that contains the union of the `photo_tags` and `caption_tags` tables.
- The `SELECT` statement inside the parentheses defines the query that will be used to populate the view.
- The `UNION ALL` operator combines the results of the two `SELECT` statements, allowing us to retrieve all rows from both tables.
- The `type` column is added to indicate the source of each row (either `photo_tags` or `caption_tags`).
- The view can be queried like a regular table, allowing us to retrieve data from the combined result set.

## When to Use Views

Views are useful when we want to simplify complex queries, hide the complexity of the underlying data structure, or provide a consistent interface to the data. They can also be used to enforce security by restricting access to certain columns or rows in a table.

**We can use views to show the 10 most recent posts AND**:

- Show the users who created the 10 most recent posts.
- Show the number of likes each of the 10 most recent posts received.
- Show the users who were tagged in the 10 most recent posts.
- Show the hashtags used by the 10 most recent posts.
- Show the average number of hashtags in the 10 most recent posts.
- Show the total number of comments the 10 most recent posts received.

```sql
CREATE VIEW recent_posts AS (
  SELECT *
  FROM posts
  ORDER BY created_at DESC
  LIMIT 10
)
```

In this example, we create a view called `recent_posts` that contains the 10 most recent posts from the `posts` table. We can then use this view to retrieve data about the most recent posts without having to repeat the query each time.

```sql
SELECT username
FROM recent_posts
JOIN users ON users.id = recent_posts.user_id
```

In this example, we use the `recent_posts` view to retrieve the usernames of the users who created the 10 most recent posts. This simplifies the query and makes it easier to read.

## Deleting and Changing Views

- We can delete a view using the `DROP VIEW` statement.
- We can change a view using the `CREATE OR REPLACE VIEW` statement.
- We can also use the `ALTER VIEW` statement to change the definition of a view without dropping and recreating it.

```sql
CREATE OR REPLACE VIEW recent_posts AS (
  SELECT *
  FROM posts
  ORDER BY created_at DESC
  LIMIT 15
)
```

In this example, we use the `CREATE OR REPLACE VIEW` statement to change the definition of the `recent_posts` view to include the 15 most recent posts instead of the 10 most recent posts. This allows us to update the view without having to drop and recreate it.

```sql
DROP VIEW recent_posts;
```

In this example, we delete the `recent_posts` view using the `DROP VIEW` statement. This removes the view from the database and frees up any resources associated with it.
