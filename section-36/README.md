# Fast Parallel Testing

## A Note on Testing

We will be writing a couple of test files. We are going to be using `jest` to run the test files. `Jest` is a testing framework that will execute our test files all at the same time.
This is atypical compared to other testing frameworks that run tests sequentially. This is a huge advantage because it allows us to run our tests in parallel. This is a huge time saver.

Because we are going to be running our test files in parallel, all of the test files are going to be trying to work with the same database at the same time. This is going to cause some issues. Each test file might interact with the same data at the same time thus creating some conflicts.

## Isolation with Schemas

To get around this issue, we are going to use a feature of PostgreSQL called `schemas`. A schema is a way to organize tables inside of a database. We can think of a schema as a way to group together a bunch of tables. We can then run queries against a specific schema to interact with the tables inside of it.

More on what schemas are:

- Schemas belong to a database.
- Schemas are a way to organize tables inside of a database.
- We can think of a schema as a way to group together a bunch of tables.
- We can then run queries against a specific schema to interact with the tables inside of it.
- Every database has a default schema called `public`.
- Each schema can have its own separate copy of a table.

We are going to create a new schema for each test file that we write. This way, each test file will have its own set of tables that it can work with. This will prevent any conflicts between test files.
