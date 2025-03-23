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
```

This example creates a recursive CTE called `countdown` that generates a countdown from 10 to 1.

- The first part of the CTE (the anchor member) selects the initial value (10), and the second part (the recursive member) selects the next value by subtracting 1 from the previous value. The recursion continues until the condition `val > 1` is no longer met.
- The result of this CTE will be a list of numbers from 10 to 1.
