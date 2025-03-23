# Recursive Common Table Expressions

## Recursive CTEs

Recursive Common Table Expressions (CTEs) are a powerful feature in SQL that allow you to perform recursive queries. They are particularly useful for querying hierarchical or tree-structured data, such as organizational charts, file systems, or any other data that has a parent-child relationship.

**Important notes on Recursive CTEs:**

- Very, very different from simple CTEs.
- Useful anytime you have a tree or graph-type data structure.
- Must use a 'UNION' keyword - simple CTEs do not require this.
- THIS IS SUPPER ADVANCED.

**Simple Example:**

```sql
-- Recursive CTE to generate a countdown from 10 to 1
WITH RECURSIVE countdown(val) as ( -- Define the CTE
    SELECT 10 as val -- Anchor member (base case)
    UNION ALL -- Combine the results of the anchor member and recursive member
    SELECT val - 1 FROM countdown WHERE val > 1 -- Recursive member (recursive case)
)
SELECT * FROM countdown; -- Final query to select from the CTE
```

This example creates a recursive CTE called `countdown` that generates a countdown from 10 to 1.

- The first part of the CTE (the anchor member) selects the initial value (10), and the second part (the recursive member) selects the next value by subtracting 1 from the previous value. The recursion continues until the condition `val > 1` is no longer met.
- The result of this CTE will be a list of numbers from 10 to 1.

## Recursive CTEs Step-by-Step

```sql
WITH RECURSIVE countdown(val) as (
  SELECT 10 as val -- Initial, non-recursive query
  UNION -- Combine the results of the initial query with the recursive query
  SELECT val - 1 FROM countdown WHERE val > 1 -- Recursive query
)
```

- Define the results and working table for the CTE.

| Results | Working Table |
| ------- | ------------- |
| val     | val           |

- Run the initial, non-recursive query, put the results into the results table and the working table.

| Results | Working Table |
| ------- | ------------- |
| val     | val           |
| 10      | 10            |

- Run the recursive query replacing the table name 'countdown' with a reference to the working table.

| Results | Working Table |
| ------- | ------------- |
| val     | val           |
| 10      | 10            |
|         | 9             |

- If recursive statement returns some rows, append them to the results table and run the recursive query again.

| Results | Working Table |
| ------- | ------------- |
| val     | val           |
| 10      | 9             |
| 9       |               |
|         |               |

- If recursive statement returns no rows, stop the recursion and return the results table.

| countdown | Working Table |
| --------- | ------------- |
| val       | val           |
| 10        | 1             |
| 9         |               |
| 8         |               |
| 7         |               |
| 6         |               |
| 5         |               |
| 4         |               |
| 3         |               |
| 2         |               |
| 1         |               |

## Why Use Recursive CTEs?

An example of a situation where you might want to use a recursive CTE is when you want to recommend a list of people to follow on a social media platform based on their connections. For example, if you have a table of users and their followers, you can use a recursive CTE to find all the followers of a specific user and their followers, and so on.

## Writing the Query

**Suggest a list of people to follow based on their connections:**

```sql
WITH RECURSIVE suggestions(leader_id, follower_id, depth) AS (
   SELECT leader_id, follower_id, 1 as depth -- Anchor member (base case)
   FROM followers -- Table containing the relationships
   WHERE follower_id = 1000 -- Starting point (user ID 1000)
   UNION ALL -- Combine the results of the anchor member and recursive member
   SELECT followers.leader_id, followers.follower_id, depth + 1 -- Recursive member (recursive case)
   FROM followers -- Table containing the relationships
   JOIN suggestions ON suggestions.leader_id = followers.follower_id -- Join to find the next level of followers
   WHERE depth < 3 -- Limit the depth of recursion (e.g., up to 3 levels deep)
)
SELECT DISTINCT users.id, users.username
FROM suggestions -- Select from the CTE
JOIN users ON users.id = suggestions.leader_id -- Join with the users table to get user details
WHERE depth > 1 -- Filter to exclude the starting user (user ID 1000)
LIMIT 30; -- Limit the number of results to 30
```

This query uses a recursive CTE to find suggestions for users to follow based on their connections. It starts with a specific user (user ID 1000) and recursively finds their followers and their followers' followers, up to a specified depth (in this case, 3 levels deep). The final result includes distinct user IDs and usernames of the suggested users to follow.
