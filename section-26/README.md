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

## So, What's a CTE?

A CTE is a temporary result set that you can reference within a `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement. It is defined using the `WITH` clause and can be thought of as a named subquery. CTEs can be recursive, allowing you to perform hierarchical queries.

```sql
WITH tags AS (
    SELECT user_id, created_at
    FROM caption_tags
    UNION ALL
    SELECT user_id, created_at
    FROM photo_tags
)
SELECT username, tags.created_at
FROM users
JOIN tags ON users.id = tags.user_id
WHERE tags.created_at < '2010-01-07';
```

This query achieves the same result as the previous one but uses a CTE to define the `tags` result set. The CTE is defined using the `WITH` clause, and it can be referenced in the main query just like a regular table. This makes the query more readable and easier to understand.

- CTEs can be used to break down complex queries into smaller, more manageable parts.
- They can improve the readability and organization of your SQL code.
- CTEs can be recursive, allowing you to perform hierarchical queries.
- They can be referenced multiple times within the same query, reducing code duplication.
- CTEs can be used to simplify complex joins and subqueries.
- They can be used to improve performance by reducing the number of times a subquery is executed.
- CTEs can be used to create temporary views that can be referenced in other queries.

**Common Table Expressions (CTEs)**:

- Are defined using the `WITH` clause before the main query.
- Produces a temporary table that we can refer to anywhere else.
- There are two types of CTEs: non-recursive and recursive.
  - Non-recursive CTEs are used to simplify complex queries.
  - Recursive CTEs are used to perform hierarchical queries.
