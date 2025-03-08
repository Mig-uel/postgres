# Database Structure Design Patterns

## Moving Forward - Approaching More Complex Designs

We've seen lots of small examples for various topics. Going forward, we'll start to see more complex designs. We will need a more complicated schema to make use of some more advanced features.

Let's build out a more serious version of an Instagram schema.

**Schema Definition**: A schema is a collection of database objects (tables) associated with one particular database username. A schema is owned by a database user and has the same name as that user. Each user owns a single schema.

We will need to work with many tables to build out this schema:

- It is challenging to work with many tables and to keep the structure/names of many different tables in your head
- It would be nice to have a way to visualize the schema or a nice way to document your database structure
- We can use a _schema designer_ to help us visualize the schema
