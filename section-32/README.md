# Schema vs Data Migrations

## Schema vs Data Migrations

Schema migrations are changes to the structure of the database, such as adding a new table or column. Data migrations are changes to the data in the database, such as adding a new row or updating a column.

Schema migrations are typically handled using tools like `Alembic` or `Flask-Migrate`, which generate migration scripts to apply changes to the database schema. These tools allow developers to track changes to the database structure over time and apply them in a consistent and reproducible manner.

Data migrations, on the other hand, are often handled manually or through custom scripts that update the data in the database. These changes are typically more ad-hoc and may not be as well-documented or version-controlled as schema migrations.
