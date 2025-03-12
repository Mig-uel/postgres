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
