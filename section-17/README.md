# How to Build a 'Mention' System

<p align="center">
  <img src="../images/mentions.png" alt="mentions" width="600">
</p>

## Additional Features Around Posts

In this section, we will add a few more features around posts to make our application more interactive and engaging. We will implement the following features:

1. **Mentions**: Users can mention other users in their posts by typing `@` followed by the username. When a user is mentioned, they will receive a notification about it.
2. **Tag People**: Users can tag other users in their posts either by typing `@` followed by the username or by selecting the user from a list of suggestions.

- Users can also add a tag to the photo precisely by clicking on the photo and selecting the area to tag.

3. **Location Tagging**: Users can tag a location in their posts. This will allow users to see posts from a specific location and explore new places.

- Posts must have a `longitude` and `latitude` field to store the location information.

4. **Captions**: Users can add captions to their posts to provide more context or information about the post.

- Captions can be up to `n` characters long.

## Adding Captions and Location Tagging

Let's start by adding the `caption` and location tagging features to our posts. We will modify the `posts` table to include these fields:

- `caption`: A VARCHAR(240) field to store the caption for the post.
- `lat`: A real field to store the latitude of the location.
- `lng`: A real field to store the longitude of the location.

```sql
ALTER TABLE posts
ADD COLUMN caption VARCHAR(240),
ADD COLUMN lat REAL,
ADD COLUMN lng REAL;
```
