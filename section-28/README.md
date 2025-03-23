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
