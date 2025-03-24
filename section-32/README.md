# Schema vs Data Migrations

## Schema vs Data Migrations

Schema migrations are changes to the structure of the database, such as adding a new table or column. Data migrations are changes to the data in the database, such as adding a new row or updating a column.

Schema migrations are typically handled using tools like `Alembic` or `Flask-Migrate`, which generate migration scripts to apply changes to the database schema. These tools allow developers to track changes to the database structure over time and apply them in a consistent and reproducible manner.

Data migrations, on the other hand, are often handled manually or through custom scripts that update the data in the database. These changes are typically more ad-hoc and may not be as well-documented or version-controlled as schema migrations.

## Dangers Around Data Migrations

Data migrations can be risky, as they involve making changes to the data in the database. If not done carefully, data migrations can lead to data loss, corruption, or inconsistency. It's important to test data migrations thoroughly and have a rollback plan in case something goes wrong.

Some common dangers around data migrations include:

- **Data Loss**: Deleting or overwriting data unintentionally.
- **Data Corruption**: Updating data incorrectly, leading to corrupted records.
- **Inconsistency**: Making changes that result in inconsistent data across tables or columns.
- **Performance Issues**: Introducing changes that impact the performance of queries or data retrieval.

There are several reasons to not run data migrations at the same time as schema migrations:

- **Complexity**: Running both types of migrations together can increase the complexity of the migration process and make it harder to track changes.
- **Risk**: Data migrations can be riskier than schema migrations, so separating them can help reduce the likelihood of errors.
- **Testing**: It's easier to test and validate schema changes separately from data changes, ensuring that each type of migration works as expected.

By separating schema and data migrations, developers can manage changes to the database more effectively and reduce the risk of introducing errors or inconsistencies.

If running both types of migrations together, you may think executing them in a transaction would be a good idea. However, this can lead to issues with data consistency, as the transaction might not be able to see changes made by other processes running in parallel.

Migrations should probably be executed in a transaction, so that if something goes wrong, the changes can be rolled back. This is especially important when running data migrations, as they can have a significant impact on the database.

However, because of how transactions work (i.e. the transaction takes a copy of the data at that point in time) and an API server might be running in parallel, the transaction might not be able to see the changes made by the API server. This can lead to inconsistencies in the data.

This is just one reason why data migrations can be risky and should be handled with care.

## Properly Running Data and Schema Migrations

To properly run data and schema migrations, we can split the migrations into separate migrations. This way, we can run schema migrations first, then data migrations, ensuring that the changes are applied in the correct order.

Here's an example of how we might structure our migrations:

```
migrations/
    versions/
        001_schema_migration.py
        002_data_migration.py
```

In this structure, we have separate migration scripts for schema changes and data changes. We can run the schema migration first to update the database structure, then run the data migration to update the data.

By separating schema and data migrations, we can manage changes to the database more effectively and reduce the risk of introducing errors or inconsistencies.
