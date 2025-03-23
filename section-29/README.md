# Optimizing Queries with Materialized Views

## Materialized Views

A view is a query that is stored in the database. A materialized view is a view that is stored in the database and can be refreshed periodically. Materialized views are useful for optimizing queries that are expensive to compute, as they allow us to store the results of a query and reuse them later.

- a query that gets executed only at very specific times, but the results are saved and can be referenced later without having to run the query again.

A materialized view is to a view as a simple common table expression is to a recursive common table expression. They are both the same thing, but one is a little bit more advanced and has a little bit more functionality.
