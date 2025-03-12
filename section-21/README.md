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
