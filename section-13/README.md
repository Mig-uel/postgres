# PostgreSQL Complex Data Types

## Notes on PGAdmin

- **pgAdmin** is a popular open-source administration and development platform for PostgreSQL.
- It provides a graphical interface to interact with the database, making it easier to manage databases, tables, and queries.
- **pgAdmin** allows you to perform various tasks such as creating databases, tables, and views, executing SQL queries, and managing users and permissions.
- It is a tool to manage and inspect a Postgres database
- Can connect to local or remote databases
- can view/change just about anything in Postgres

**About the Postgres Server**:

- **Server** is the top-level container in pgAdmin
- **Databases** are stored within a server
- **Schemas** are stored within databases
- **Tables** are stored within schemas
- We are running a local server on our machine, running a Postgres Server locally
- A Postgres server can have multiple databases
- All data for a single application is typically stored in a single database
- Having multiple databases is useful for separating different applications or different environments (e.g., development, testing, production)
- Having multiple databases is more about working with more than one app on your machine

## Data Types in PostgreSQL

Data types in PostgreSQL can be broadly classified into two categories:

1. **Simple Data Types**: These are basic data types that store single values. Examples include `integer`, `text`, `boolean`, etc.
2. **Complex Data Types**: These are composite data types that can store multiple values. Examples include `arrays`, `JSON`, `hstore`, etc.

Some of the common data type categories in PostgreSQL are:

| Data Types |           |        |
| ---------- | --------- | ------ |
| Number     | Currency  | Binary |
| Date/Time  | Character | JSON   |
| Geometric  | Range     | Arrays |
| Boolean    | XML       | UUID   |

**Numeric Data Types**:

Numbers without any decimal points

- `smallint`: A small integer (2 bytes) ranging from -32,768 to 32,767.
- `integer`: A standard integer (4 bytes) ranging from -2,147,483,648 to 2,147,483,647.
- `bigint`: A large integer (8 bytes) ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.

No decimal points, auto-incrementing

- `smallserial`: A small auto-incrementing integer (2 bytes) ranging from 1 to 32,767.
- `serial`: A standard auto-incrementing integer (4 bytes) ranging from 1 to 2,147,483,647.
- `bigserial`: A large auto-incrementing integer (8 bytes) ranging from 1 to 9,223,372,036,854,775,807.

Numbers with decimal points

- `decimal(p, s)`: A fixed-point number with `p` digits in total and `s` digits after the decimal point.
- `numeric(p, s)`: An alias for `decimal`.
- `real`: A single-precision floating-point number (4 bytes) ranging from 1.18e-38 to 3.4e+38.
- `double precision`: A double-precision floating-point number (8 bytes) ranging from 2.23e-308 to 1.79e+308 (15 decimal digits).
- `float(p)`: A floating-point number with `p` digits of precision.
