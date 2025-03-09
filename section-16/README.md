# How to Build a 'Like' System

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
