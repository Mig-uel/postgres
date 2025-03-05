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

## One-to-Many and Many-to-One Relationships

One-to-many relationships are the most common type of relationship in a relational database. In a one-to-many relationship, one record in a table can be associated with multiple records in another table. For example, a user can have multiple posts, but each post can only have one user. (A user has many posts, but a post belongs to one user.)

Many-to-one relationships are the inverse of one-to-many relationships. In a many-to-one relationship, multiple records in a table can be associated with a single record in another table. For example, multiple posts can be associated with a single user. (A post belongs to one user, but a user has many posts.)

To establish a one-to-many or many-to-one relationship between two tables, you can use a foreign key. The foreign key is a field in one table that refers to the primary key in another table.

**One-to-Many Examples:**

- A boat has many crew members, but each crew member can only be on one boat.
- A school has many students, but each student can only attend one school.
- A company has many employees, but each employee can only work for one company.

**Many-to-One Examples:**

- Many crew members can be on one boat, but each crew member can only be on one boat.
- Many students can attend one school, but each student can only attend one school.
- Many employees can work for one company, but each employee can only work for one company.

## One-to-One and Many-to-Many Relationships

One-to-one relationships are less common than one-to-many relationships. In a one-to-one relationship, one record in a table is associated with only one record in another table. For example, a user can have one profile, and a profile can only belong to one user.

Many-to-many relationships are more complex than one-to-many relationships. In a many-to-many relationship, multiple records in one table can be associated with multiple records in another table. For example, a student can attend multiple classes, and a class can have multiple students.

To establish a one-to-one relationship between two tables, you can use a foreign key. The foreign key is a field in one table that refers to the primary key in another table.

To establish a many-to-many relationship between two tables, you can use a join table. A join table is a table that contains foreign keys that refer to the primary keys in two other tables. The join table is used to establish a relationship between the two tables.

**One-to-One Examples:**

- A boat has one captain, and a captain can only be on one boat.
- A company has one CEO, and a CEO can only work for one company.
- A capital city has one country, and a country can only have one capital city.
- A student has one desk, and a desk can only belong to one student.
- A person has one driver's license, and a driver's license can only belong to one person.

**Many-to-Many Examples:**

- Many students can attend many classes, and many classes can have many students.
- Many tasks can be assigned to many employees, and many employees can be assigned many tasks.
- Many movies can have many actors, and many actors can be in many movies.
- Many conferences can have many attendees, and many attendees can attend many conferences.

## Primary and Foreign Keys

Primary keys are used to uniquely identify each record in a table. A primary key is a unique identifier for each record in a table and is used to establish relationships with other tables.

Foreign keys are used to establish relationships between tables. A foreign key is a field in a table that refers to the primary key in another table. It is used to establish a link between two tables.

In a one-to-many or many-to-one relationship, the foreign key is placed in the table that has the many side of the relationship. For example, in a one-to-many relationship between users and posts, the foreign key would be placed in the posts table.

**Example:**

| Table: users     | Table: posts          |
| ---------------- | --------------------- |
| id (primary key) | id (primary key)      |
| username         | title                 |
| email            | content               |
| password         | user_id (foreign key) |
| created_at       | created_at            |
| updated_at       | updated_at            |

In the example above, the `user_id` column in the `posts` table is a foreign key that refers to the `id` column in the `users` table. This establishes a one-to-many relationship between users and posts.

## Understanding Foreign Keys

Foreign keys are used to establish relationships between tables. A foreign key is a field in a table that refers to the primary key in another table. It is used to establish a link between two tables.

**Example:**

| Table: users     | Table: photos         | Table: comments       | Table: likes          |
| ---------------- | --------------------- | --------------------- | --------------------- |
| id (primary key) | id (primary key)      | id (primary key)      | id (primary key)      |
| username         | url                   | content               | user_id (foreign key) |
| email            | user_id (foreign key) | post_id (foreign key) | post_id (foreign key) |
| password         | created_at            | created_at            | created_at            |
| created_at       | updated_at            | updated_at            | updated_at            |
| updated_at       |                       |                       |                       |

In the example above, the `user_id` column in the `photos`, `comments`, and `likes` tables is a foreign key that refers to the `id` column in the `users` table. This establishes a one-to-many relationship between users and photos, comments, and likes.

The 'many' side of the relationship is the side that contains the foreign key. In this example, the `photos`, `comments`, and `likes` tables are the 'many' side of the relationship, and the `users` table is the 'one' side of the relationship.

## Primary Keys vs. Foreign Keys

**Primary Key:**

- A primary key is a unique identifier for each record in a table.
- Each row in every table has ONE primary key.
- No other row in the same table can have the same value for the primary key.
- 99% of the time, the primary key is called `id`.
- Either an integer or a UUID.
- Will never change.
- Used to establish relationships with other tables.

**Foreign Key:**

- A foreign key is a field in a table that refers to the primary key in another table.
- Rows only have a foreign key if they are related to another table.
- Many rows in the same table can have the same value for the foreign key.
- Name for foreign keys varies, but it often includes the name of the related table like `user_id`.
- The value of a foreign key is the same as the value of the primary key in the related table.
- Will change if the relationship changes.
- Used to establish relationships between tables.

## Auto-Generated Primary Keys

When creating a new record in a table, the primary key is often auto-generated. This means that the database will automatically assign a unique value to the primary key when a new record is created.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
);
```

In the example above, the `id` column is a primary key that is auto-generated using the `SERIAL` keyword. This means that the database will automatically assign a unique value to the `id` column when a new record is created.

## Creating Foreign Keys

When creating a foreign key in a table, you need to specify the column that will be the foreign key and the table and column that the foreign key will reference.

```sql
CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  url VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id),
)
```

In the example above, the `user_id` column in the `photos` table is a foreign key that references the `id` column in the `users` table. This establishes a one-to-many relationship between users and photos.

## Running Queries on Associated Tables

When you have established relationships between tables using primary and foreign keys, you can run queries that join the tables together to retrieve related data.

**Find all photos associated with a user**:

```sql
SELECT * FROM photos
WHERE user_id = 4;
```

In the example above, the query retrieves all photos that are associated with the user with an `id` of 4. The `user_id` column in the `photos` table is a foreign key that references the `id` column in the `users` table.

**List all photos with details about the user who posted them**:

```sql
SELECT * FROM photos
JOIN users ON photos.user_id = users.id
```

In the example above, the query joins the `photos` table with the `users` table on the `user_id` column in the `photos` table and the `id` column in the `users` table. This retrieves all photos with details about the user who posted them.
