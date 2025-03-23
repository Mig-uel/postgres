# Optimizing Queries with Materialized Views

## Materialized Views

A view is a query that is stored in the database. A materialized view is a view that is stored in the database and can be refreshed periodically. Materialized views are useful for optimizing queries that are expensive to compute, as they allow us to store the results of a query and reuse them later.

- a query that gets executed only at very specific times, but the results are saved and can be referenced later without having to run the query again.

A materialized view is to a view as a simple common table expression is to a recursive common table expression. They are both the same thing, but one is a little bit more advanced and has a little bit more functionality.

## Grouping by Week

**For each week, show the number of likes that posts and comments received. Use the post and comment created_at date, not when the like was received.**

## Reminder of Left Joins

- A left join is a type of join that returns all rows from the left table and the matching rows from the right table. If there are no matches, NULL values are returned for the columns from the right table.
- A left join is used when we want to include all rows from the left table, even if there are no matching rows in the right table.

## Writing a Slow Query

```sql
SELECT date_trunc('week', COALESCE(posts.created_at, comments.created_at)) AS week,
       COUNT(posts.id) AS post_likes,
       COUNT(comments.id) AS comment_likes
FROM likes
LEFT JOIN posts ON posts.id = likes.post_id
LEFT JOIN comments ON comments.id = likes.comment_id
GROUP BY week
ORDER BY week;
```

This query retrieves the number of likes that posts and comments received for each week. It uses a left join to combine the `likes`, `posts`, and `comments` tables based on the specified conditions. The results are grouped by week and sorted in ascending order.

- The `COALESCE` function returns the first non-null value in the list of arguments. In this case, it returns the `created_at` date from either the `posts` or `comments` table.
- The `date_trunc` function truncates the date to the specified precision (in this case, 'week').
- The `COUNT` function counts the number of rows in each group.
- The `LEFT JOIN` operator combines rows from the `likes`, `posts`, and `comments` tables based on the specified conditions.
- The `GROUP BY` clause groups the results by the specified column (in this case, `week`).
- The `ORDER BY` clause sorts the results by the specified column (in this case, `week`).

This query can be slow because it has to join the `likes`, `posts`, and `comments` tables and group the results by week. It may also have to scan a large number of rows in the `likes` table to find the matching rows in the `posts` and `comments` tables. A materialized view can help optimize this query by storing the results of the join and grouping operation, allowing us to retrieve the data more quickly.
