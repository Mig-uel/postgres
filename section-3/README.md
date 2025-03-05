# Working with Multiple Tables

## Approaching Database Design

When designing a database, it is important to consider the relationships between the tables. In a relational database, tables are connected through keys. There are three types of keys that are commonly used to establish relationships between tables:

1. **Primary Key**: A primary key is a unique identifier for each record in a table. It is used to uniquely identify each record in the table and is used to establish relationships with other tables.

2. **Foreign Key**: A foreign key is a field in a table that is used to establish a link between two tables. It is a field in one table that refers to the primary key in another table.

3. **Composite Key**: A composite key is a combination of two or more fields that uniquely identify a record in a table. It is used when a single field is not sufficient to uniquely identify a record.

When designing a database, it is important to consider the relationships between the tables and how they will be connected. By using primary keys, foreign keys, and composite keys, you can establish relationships between tables and ensure data integrity.

#### What Tables Should We Make?

Common features (like authentication, comments, etc) are frequently build with conventional table names and columns. For example, a user table might have columns like `id`, `username`, `email`, `password`, `created_at`, and `updated_at`.

What type of resources exist in your app? Create a separate table for each resource. For example, if you have a blog, you might have tables for `posts`, `comments`, and `tags`.

Features that seem to indicate a relationship or ownership between two types of resources need to be reflected in our table design. For example, a `posts` table might have a `user_id` column to indicate which user created the post.
