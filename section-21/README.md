# Approaching and Writing Complex Queries

## Highest User ID Query

**Select the 3 users with the highest IDs from the users table.**

```sql
SELECT *
FROM users
ORDER BY id DESC
LIMIT 3;
```

This query selects all columns from the `users` table, orders the results by the `id` column in descending order, and limits the output to the first 3 rows.

## Posts by a Particular User Query

**Join the users and posts table. Show the username of user ID 200 and the captions of all posts they have created.**

```sql
SELECT username, caption
FROM users
JOIN posts ON users.id = posts.user_id
WHERE users.id = 200;
```

This query retrieves the `username` and `caption` columns from the `users` and `posts` tables, respectively, by joining them on the `id` and `user_id` columns. It filters the results to show only the user with ID 200.
