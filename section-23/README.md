# A Look at Indexes for Performance

## Full Table Scans

When you run a query that doesn't use an index, the database has to scan every row in the table to find the rows that match your query. This is called a full table scan. Full table scans are slow because they require reading every row in the table, even if only a few rows match your query.

Every time we load a table into memory, we have to read the entire table from disk. This is slow because disk reads are much slower than memory reads. If we have a large table, this can take a long time.

## What's an Index?

An index is a data structure that allows the database to quickly look up rows in a table based on the values in one or more columns. When you create an index on a column, the database creates a separate data structure that stores the values in that column in sorted order. This allows the database to quickly find rows that match a query based on the values in that column.

- A data structure that efficiently tells use what block/index a record is stored in.
