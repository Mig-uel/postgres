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
