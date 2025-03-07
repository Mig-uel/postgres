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
