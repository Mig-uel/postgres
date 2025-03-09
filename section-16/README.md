# How to Build a 'Like' System

<p align="center">
  <img src="../images/post_likes.png" alt="Post Likes" width="400px" />
  <img src="../images/comment_likes.png" alt="Comment Likes" width="400px" />
</p>

## Requirements of a 'Like' System

**Rules of 'Likes'**:

- A user can only like a post once.
- A user can unlike a post.
- Need to be able to see how many users liked a post.
- Need to be able to list all users who liked a post.
- Something besides a post can be liked (e.g., a comment).
- We might want to think about 'dislikes' or 'reactions' in the future.

## How Not to Design a 'Like' System

**Don't Do This**:

- Adding a 'likes' column to the post table.
  - No way to make sure a user only likes a post once.
  - No way to make sure a user can only 'unlike' a post they've liked.
  - No way to figure out who liked a post.
  - No way to remove a like if a user deletes their account.

There are more reasons why this is a bad idea, but these are the main ones.

## How to Design a 'Like' System

We need to create a new table to store the likes. This table will have the following columns:

- `id`: A unique identifier for each like.
- `user_id`: The ID of the user who liked the post.
- `post_id`: The ID of the post that was liked.
- `created_at`: The timestamp when the like was created.

We will also need to add a unique constraint to the `user_id` and `post_id` columns to ensure that a user can only like a post once.

```sql
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, post_id)
);
```

Now, whenever a user likes a post, we insert a new row into the `likes` table with the `user_id` and `post_id`. If the user tries to like the same post again, the unique constraint will prevent the insertion, ensuring that a user can only like a post once.

To unlike a post, we simply delete the row from the `likes` table where the `user_id` and `post_id` match.

To get the number of likes on a post, we can use a simple `COUNT` query:

```sql
SELECT COUNT(*) FROM likes WHERE post_id = 1;
```

To get a list of users who liked a post, we can use a `JOIN` query:

```sql
SELECT users.name
FROM likes
JOIN users ON likes.user_id = users.id
WHERE likes.post_id = 1;
```

This design allows us to easily implement the 'like' system and fulfills all the requirements we set out at the beginning.

## Making a Reaction System Instead

If we want to expand the system to include more than just 'likes,' we can modify the `likes` table to include a `reaction` column:

```sql
CREATE TABLE reactions (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  reaction VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, post_id, reaction)
);
```

Now, the `reactions` table can store different types of reactions (e.g., 'like,' 'dislike,' 'love,' 'angry') for each post. The unique constraint on `user_id`, `post_id`, and `reaction` ensures that a user can only react to a post once with a specific reaction.

This design allows us to build a more flexible reaction system that can handle various types of reactions beyond just 'likes.'

Most likely, the set of reactions will be limited and predefined, so PostgreSQL's `ENUM` type could be used instead of `VARCHAR(255)` for the `reaction` column.

## Polymorphic Associations

If we want to allow something besides a post to be liked (e.g., a comment), we can use a polymorphic association. This involves creating a `likeable_type` and `likeable_id` column in the `likes` table to store the type and ID of the object being liked.

```sql
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  likeable_id INT NOT NULL,
  likeable_type VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, likeable_id, likeable_type)
);
```

Now, we can like any object by specifying its type and ID in the `likeable_type` and `likeable_id` columns. This allows us to build a 'like' system that can be applied to multiple types of objects in our application.

<hr>

**First Solution**: Creating a Polymorphic Association

Polymorphic associations are a way to associate a model with multiple other models using a single association. In this case, we want to create a `Like` model that can be associated with multiple other models (e.g., `Post`, `Comment`).

They are usually not recommended in relational databases because they can lead to complex queries and performance issues. However, in some cases, they might be the best solution to achieve the desired functionality.

First, we change the 'likes' table to include a `liked_id` instead of a `post_id` and a `liked_type` column to store the type of the liked object.

```sql
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  liked_id INT NOT NULL,
  liked_type VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, liked_id, liked_type)
);
```

- A like can be a 'post' or a 'comment' like.
- This will require your app to figure out the meaning of each like.
- Can't use foreign key columns - 'liked_id' is just a plain integer.
- Not recommended, but you'll see it in some applications.

## Polymorphic Associations Alternative Implementation

**Second Solution**: Using Separate Columns for Each Type

Instead of using a polymorphic association, we can create separate columns for each type of object that can be liked. This approach is more straightforward and easier to work with, but it requires adding a new column for each type of object. Each column will be a foreign key to the corresponding table.

```sql
CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  post_id INT,
  comment_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

- Each possible type of relation gets its own FK column.
- We'd still want to make sure either `post_id` or `comment_id` is not null.

We might want to add in validation to ensure that either `post_id` or `comment_id` exists in their respective tables. This can be done using a trigger or a check constraint.

```sql
ALTER TABLE likes
ADD CONSTRAINT post_or_comment_exists
CHECK (COALESCE(post_id)::BOOLEAN::INTEGER, 0) + (COALESCE(comment_id)::BOOLEAN::INTEGER, 0) = 1;
```

This constraint ensures that either `post_id` or `comment_id` is not null, but not both. It's a simple way to enforce the relationship between the `likes` table and the `posts` and `comments` tables.

**COALESCE Function**: Returns the first non-null value in the list of arguments.

```sql
SELECT COALESCE(NULL, 1, 2, 3); -- Returns 1
```

## The Simplest Solution

**Third Solution**: Separate Tables for Each Type

The simplest solution is to create separate tables for each type of object that can be liked. This approach is the most straightforward and easiest to understand, but it requires creating multiple tables.

```sql
CREATE TABLE post_likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  post_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, post_id)
);

CREATE TABLE comment_likes (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  comment_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, comment_id)
);

-- And so on for other types of objects
```

- Each type of like gets its own table.
- Still want to write queries tha that will count likes across all types? You can use a `UNION` or a View.

## Solution for Polymorphic Associations

We can create a `likes` table in addition to specific tables for each type of object that can be liked. These tables may be created:

- `likes` table: Contains the common columns for all likes.
- `post_likes` table: Contains the specific columns for post likes.
- `comment_likes` table: Contains the specific columns for comment likes.

The rule is that when a like is created, a row is inserted into the `likes` table and the corresponding type-specific table (`post_likes`, `comment_likes`).

For example, a user likes a post:

```sql
INSERT INTO likes (user_id, resource)
VALUES (1, 'post');

INSERT INTO post_likes (user_id, post_id, like_id)
VALUES (1, <some post id>, <like id from likes table>);
```

This way, we can maintain the flexibility of polymorphic associations while still having the benefits of separate tables for each type of object.

With this approach, you can easily see who liked a post or a comment, how many likes a post or a comment has, you can get all of the likes for a user, and you can easily add new types of objects that can be liked.

And, if you delete the like from the `likes` table, you can cascade the delete to the specific type table to remove the like from there as well.

## So Which Solution Should You Choose?

The choice of which solution to use depends on the specific requirements of your application. Here are some factors to consider:

- **Polymorphic Associations**: Use when you need to associate a model with multiple other models and the number of models is limited.
- **Separate Columns for Each Type**: Use when you have a small number of types and want a simple solution.
- **Separate Tables for Each Type**: Use when you have a large number of types and want a straightforward solution.

Each solution has its pros and cons, so choose the one that best fits your application's needs and complexity.

We are going to use the second solution, which is the most straightforward and easiest to work with for our application.
