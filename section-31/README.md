# Managing Database Design with Schema Migrations

## A Story on Migrations

Imagine you are working on a project with a team of developers. You have a database that stores user information. The database has a table called `users` with columns `id`, `name`, `email`, and `password`. The project is going well, and you are adding new features to the application. One day, you realize that you need to add a new column to the `users` table called `phone_number`. You add the column to the table and update the code to use the new column. Everything is working fine, and you deploy the changes to production.

A few weeks later, another developer joins the team. They clone the project and set up the development environment on their local machine. When they run the application, they encounter an error. The error message says that the `phone_number` column does not exist in the `users` table. You are puzzled because you are sure that you added the column. You check the database, and to your surprise, the `phone_number` column is missing.

You realize that the new developer cloned the project after you made the changes to the database schema. They did not have the `phone_number` column in their local database. You explain the situation to the new developer, and they manually add the `phone_number` column to their database. The issue is resolved, but you are left wondering if there is a better way to manage database schema changes.

This scenario illustrates a common problem faced by developers when working with databases. As the application evolves, the database schema needs to be updated to reflect the changes. Managing these changes manually can be error-prone and time-consuming.

**Big Lesson #1**: Changes to the database and changes to clients need to be made at precisely the same time.

**Big Lesson #2**: When working with a team, we need a really easy way to tie the structure of the database to the code that uses it.

A way to solve this problem is to use **schema migrations**. Schema migrations provide a structured and repeatable way to define database changes. They allow developers to define changes to the database schema in a way that can be version-controlled, applied, and rolled back easily.

## Migration Files

A migration file is a script that defines a set of changes to the database schema. It typically contains a series of SQL commands that create, modify, or delete database objects such as tables, columns, indexes, and constraints. Migration files are version-controlled and stored in a directory within the project.

- Code that describes the changes to the database schema

When a migration file is applied to a database, it updates the schema to reflect the changes defined in the file. This process is known as **applying a migration**. If a migration file is no longer needed or contains errors, it can be rolled back by **reverting the migration**.

Migration files are typically named with a timestamp and a description of the changes they contain. For example, a migration file that adds a `phone_number` column to the `users` table might be named `20220101120000_add_phone_number_to_users.sql`. The timestamp in the filename ensures that migration files are applied in the correct order.

A migration file can be divided into two sections: **up** and **down**. The **up** section contains the SQL commands to apply the migration, while the **down** section contains the commands to revert the migration. This allows developers to **apply** and **revert** migrations easily.

```sql
-- 20220101120000_add_phone_number_to_users.sql

-- Up
ALTER TABLE users ADD COLUMN phone_number VARCHAR(20);

-- Down
ALTER TABLE users DROP COLUMN phone_number;
```

In the example above, the migration file adds a `phone_number` column to the `users` table in the **up** section and drops the column in the **down** section. This structure allows developers to apply the migration to add the column and revert the migration to remove the column if needed.
