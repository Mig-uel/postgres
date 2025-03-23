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
