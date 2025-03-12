# A Look at Indexes for Performance

## Full Table Scans

When you run a query that doesn't use an index, the database has to scan every row in the table to find the rows that match your query. This is called a full table scan. Full table scans are slow because they require reading every row in the table, even if only a few rows match your query.

Every time we load a table into memory, we have to read the entire table from disk. This is slow because disk reads are much slower than memory reads. If we have a large table, this can take a long time.

## What's an Index?

An index is a data structure that allows the database to quickly look up rows in a table based on the values in one or more columns. When you create an index on a column, the database creates a separate data structure that stores the values in that column in sorted order. This allows the database to quickly find rows that match a query based on the values in that column.

- A data structure that efficiently tells use what block/index a record is stored in.

## How Indexes Work

When you create an index on a column, the database creates a separate data structure that stores the values in that column in sorted order. This allows the database to quickly find rows that match a query based on the values in that column.

To create an index, first we have to:

- Which column do we want to have very fast lookups on?
- Extract only the property we want to do fast lookups on and the block/index for each record.
- Sort the block/index in some meaningful way (alphabetical for text, value for numbers, etc).
- Organize into a tree structure (B-tree) for fast lookups. Evenly distribute values in the leaf nodes, in order left to right.
- Add helpers to the root node to quickly find the correct leaf node.

## Creating an Index

To create an index on a column, you can use the `CREATE INDEX` statement. Here's an example:

```sql
CREATE INDEX username_index ON table_name (column_name);
```

This statement creates an index called `username_index` on the `column_name` column in the `table_name` table.

The database will create a separate data structure that stores the values in the `column_name` column in sorted order. This allows the database to quickly find rows that match a query based on the values in that column.

To drop an index, you can use the `DROP INDEX` statement. Here's an example:

```sql
DROP INDEX username_index;
```

This statement drops the `username_index` index from the table.

## Benchmarking Indexes

To see the performance difference between using an index and not using an index, you can use the `EXPLAIN` statement. Here's an example:

```sql
EXPLAIN SELECT * FROM table_name WHERE column_name = 'value';
```

This statement shows you the query plan that the database will use to execute the query. If the database is using an index, you'll see `Index Scan` in the query plan. If the database is doing a full table scan, you'll see `Seq Scan` in the query plan.

## Downsides of Indexes

While indexes can speed up queries, they also have some downsides:

- Indexes take up space on disk. If you have a large table with many indexes, this can use up a lot of disk space.
- Indexes can slow down write operations. When you insert, update, or delete rows in a table, the database has to update the indexes as well. This can slow down write operations, especially if you have many indexes on a table.
- Indexes might not be used. The database optimizer decides whether to use an index based on the query plan. If the optimizer decides that using an index would be slower than doing a full table scan, it won't use the index.

## Index Types

There are several types of indexes you can create in PostgreSQL:

- B-tree indexes: The default index type in PostgreSQL. B-tree indexes are balanced tree structures that allow the database to quickly find rows based on the values in one or more columns.

- Hash indexes: Hash indexes are used for equality comparisons. They are faster than B-tree indexes for equality comparisons but don't support range queries.

- GiST indexes: Generalized Search Tree (GiST) indexes are used for indexing complex data types like geometric data, full-text search, and arrays.

- SP-GiST indexes: Space-Partitioned Generalized Search Tree (SP-GiST) indexes are used for indexing data that can be partitioned into non-overlapping regions.

- GIN indexes: Generalized Inverted Index (GIN) indexes are used for indexing arrays and full-text search data.

- BRIN indexes: Block Range INdexes (BRIN) indexes are used for very large tables where the data is sorted in some way.
