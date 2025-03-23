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
