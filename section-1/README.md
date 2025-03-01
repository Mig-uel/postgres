# Simple - But Powerful - SQL Statements

## What is PostgreSQL?

SQL is the language used to interact with databases. PostgreSQL is a powerful, open-source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.

## Challenges of Postgres

1. Writing efficient queries to retrieve information from the database.
2. Designing the schema, or structure, of the database.
3. Understanding when to use advanced features of PostgreSQL, such as indexes, views, and triggers.
4. Managing the database, including backups, replication, and scaling in a production environment.

## Writing Efficient Queries

**Database Design Process**

1. What kind of thing are we storing?
2. What properties does this thing have?
3. What type of data does each property have?

Example: A database to store a list of cities.

1. What kind of thing are we storing?
   - Cities
2. What properties does this thing have?
   - name
   - country
   - population
   - area
3. What type of data does each property have?
   - name: string
   - country: string
   - population: number
   - area: number

**Creating a Table**

1. We should create a table called `cities` to store the information.
2. The table should have columns for `name`, `country`, `population`, and `area`.
3. Each column should have a data type that matches the type of data we want to store.

| Cities            |                      |                         |                   |
| ----------------- | -------------------- | ----------------------- | ----------------- |
| **name** (string) | **country** (string) | **population** (number) | **area** (number) |
| Paris             | France               | 2141000                 | 105               |
| Tokyo             | Japan                | 13929286                | 2187              |
| New York          | USA                  | 8336697                 | 468               |

**SQL Statements**

```sql
CREATE TABLE cities (
  name VARCHAR(100),
  country VARCHAR(100),
  population INT,
  area INT
)
```

Explanation:

- `CREATE TABLE cities` creates a new table called `cities`.
- `(name VARCHAR(100), country VARCHAR(100), population INT, area INT)` defines the columns of the table.
- `VARCHAR(100)` is a variable-length string with a maximum length of 100 characters.
- `INT` is an integer data type.

Keywords: Tells the database what to do.
Identifiers: Names of tables, columns, and other objects.
Data Types: The type of data that can be stored in a column.
