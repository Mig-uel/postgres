# Simple Common Table Expressions

## Common Table Expressions (CTEs)

Common Table Expressions (CTEs) are a powerful feature in SQL that allow you to define temporary result sets that can be referenced within a `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement. CTEs can improve the readability and organization of complex queries by breaking them down into smaller, more manageable parts. They are particularly useful for recursive queries, hierarchical data retrieval, and simplifying complex joins.

**Show the username of users who were tagged in a caption or photo before January 7th, 2010. Also, show the date they were tagged.**

```sql
SELECT username, tags.created_at
FROM users
JOIN (
    SELECT user_id, created_at
    FROM caption_tags
    UNION ALL
    SELECT user_id, created_at
    FROM photo_tags
) as tags ON users.id = tags.user_id
WHERE tags.created_at < '2010-01-07';
```

This query retrieves the usernames of users who were tagged in either captions or photos before January 7th, 2010.

A downside of this approach is its big subquery. It is not very readable, and it is not clear what the subquery is doing. We can use a CTE to improve the readability of this query.
