# Database Structure Design Patterns

## Moving Forward - Approaching More Complex Designs

We've seen lots of small examples for various topics. Going forward, we'll start to see more complex designs. We will need a more complicated schema to make use of some more advanced features.

Let's build out a more serious version of an Instagram schema.

**Schema Definition**: A schema is a collection of database objects (tables) associated with one particular database username. A schema is owned by a database user and has the same name as that user. Each user owns a single schema.

We will need to work with many tables to build out this schema:

- It is challenging to work with many tables and to keep the structure/names of many different tables in your head
- It would be nice to have a way to visualize the schema or a nice way to document your database structure
- We can use a _schema designer_ to help us visualize the schema

## SQL Schema Designers

There are many tools available to help you design your schema. Some popular ones include:

- [dbdiagram.io](https://dbdiagram.io/): A free tool that allows you to create database diagrams online. It supports various database systems like PostgreSQL, MySQL, SQLite, and more.
- [drawsql.app](https://drawsql.app/): A modern database diagram tool that allows you to create, share, and collaborate on database diagrams. It supports various database systems like PostgreSQL, MySQL, and SQL Server.
- [sqlDBM](https://sqldbm.com/): A cloud-based database modeling tool that allows you to create, edit, and share database models. It supports various database systems like PostgreSQL, MySQL, and SQL Server.
- [quickdatabasediagrams.com](https://www.quickdatabasediagrams.com/): A simple tool that allows you to create quick and easy database diagrams. It supports various database systems like PostgreSQL, MySQL, and SQL Server.
- [ondras.zarovi.cz/sql/demo/](http://ondras.zarovi.cz/sql/demo/): A web-based tool that allows you to create database diagrams using a simple text-based language.
- [Lucidchart](https://www.lucidchart.com/pages/): A cloud-based diagramming tool that allows you to create various types of diagrams, including database diagrams.
