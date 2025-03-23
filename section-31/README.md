# Managing Database Design with Schema Migrations

## A Story on Migrations

Imagine you are working on a project with a team of developers. You have a database that stores user information. The database has a table called `users` with columns `id`, `name`, `email`, and `password`. The project is going well, and you are adding new features to the application. One day, you realize that you need to add a new column to the `users` table called `phone_number`. You add the column to the table and update the code to use the new column. Everything is working fine, and you deploy the changes to production.

A few weeks later, another developer joins the team. They clone the project and set up the development environment on their local machine. When they run the application, they encounter an error. The error message says that the `phone_number` column does not exist in the `users` table. You are puzzled because you are sure that you added the column. You check the database, and to your surprise, the `phone_number` column is missing.

You realize that the new developer cloned the project after you made the changes to the database schema. They did not have the `phone_number` column in their local database. You explain the situation to the new developer, and they manually add the `phone_number` column to their database. The issue is resolved, but you are left wondering if there is a better way to manage database schema changes.

This scenario illustrates a common problem faced by developers when working with databases. As the application evolves, the database schema needs to be updated to reflect the changes. Managing these changes manually can be error-prone and time-consuming.

**Big Lesson #1**: Changes to the database and changes to clients need to be made at precisely the same time.

**Big Lesson #2**: When working with a team, we need a really easy way to tie the structure of the database to the code that uses it.

A way to solve this problem is to use **schema migrations**. Schema migrations provide a structured and repeatable way to define database changes. They allow developers to define changes to the database schema in a way that can be version-controlled, applied, and rolled back easily.
