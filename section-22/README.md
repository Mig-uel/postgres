# Understanding the Internals of PostgreSQL

## Thinking About Performance

**Performance with PostgreSQL**:

- We will understand performance by looking at the internals of PostgreSQL.
- We will take a look at how data is stored and used in PostgreSQL.
- Investigate how indexes work and how they can be used to improve performance.
- Understand how queries are executed and how to optimize them.

## Where Does PostgreSQL Store Data?

- PostgreSQL stores data in a collection of files called **data files**.
- These data files are stored in a directory called the **data directory**.
- The data directory is specified when you initialize a new PostgreSQL database.
- The data directory contains several files and directories that store different types of data.

```sql
SHOW data_directory;
```

This command will show the location of the data directory for the current database.

```sql
SELECT oid, datname FROM pg_database;
```

This command will show the OID (object identifier) and name of all databases in the current PostgreSQL instance.

```sql
SELECT * FROM pg_class;
```

This command will show all tables in the current database.

## Heaps, Blocks, and Tuples

- **Heaps**: The main storage structure in PostgreSQL is called a **heap**.
- **Blocks**: Data in a heap is stored in **blocks**.
- **Tuples**: Each row in a table is called a **tuple**.

<hr>

**Heap or Heap File**: A file that contains all the data (rows) of our table.
**Tuple or Item**: A single row from our table.
**Block or Page**: The heap file is divided into many different 'blocks' or 'pages'. Each page/block stores a fixed number of tuples/items/rows.

A heap file is divided into many different blocks or pages. Each page stores a fixed number of tuples or rows. When we insert a new row into a table, PostgreSQL will find an empty slot in one of the pages and insert the row there.

Each page has a fixed size, typically 8KB. This size can be changed in the configuration settings of PostgreSQL.

Why are there blocks at all? Why not just store all the data in one big heap?

## Block Data Layout

Let's say we are looking at heap file 22445. This file is divided into blocks, and each block is given a unique block number. The block number starts at 0 and goes up to the total number of blocks in the file. Remember, each block is 8KB in size.

```
Block 0: 8KB
Block 1: 8KB
Block 2: 8KB
Block 3: 8KB
```

Each block contains a header and a data section. The header contains metadata about the block, such as the block number and the number of tuples stored in the block. The data section contains the actual tuples or rows.

```
Block 0: Header (metadata) + Data (tuples)
Block 1: Header (metadata) + Data (tuples)
Block 2: Header (metadata) + Data (tuples)
Block 3: Header (metadata) + Data (tuples)
```

When we insert a new row into a table, PostgreSQL will find an empty slot in one of the blocks and insert the row there. If there is no space in the current block, PostgreSQL will allocate a new block and insert the row there.
