# How to Build a 'Hashtag' System

![Hashtags](../images/hashtags.png)

In this section, we will implement a hashtag system for our social media application. Hashtags are a popular way to categorize and discover content on social media platforms. Users can add hashtags to their posts to make them more discoverable and to join conversations around specific topics.

## What is a Hashtag?

A hashtag is a word or phrase preceded by the `#` symbol, used to categorize content on social media platforms. Hashtags are clickable and searchable, allowing users to explore posts related to a specific topic or keyword.

- Hashtags are commonly used on platforms like Twitter, Instagram, and Facebook to organize content and facilitate discussions.
- Users can click on a hashtag to view all posts that include that hashtag.
- Hashtags can be used to join trending topics, participate in challenges, or promote events.

## Designing a Hashtag System

Seeing hashtags used in posts, comments, and user bios might make you think that we need some kind of relationship for each object that uses a hashtag. However, this is not the case. Instead, we can use a simple design to implement a hashtag system efficiently.

We only have to model resources in the database if we expect to query them directly. Do we expect to run a query like "Find all posts that contain a specific hashtag"? If so, we need to model the relationship between posts and hashtags. Otherwise, we can use a simple text field to store hashtags in the post table.

On Instagram, we can search for hashtags and view posts that contain them. This implies that posts that contain hashtags are searchable. In this case, we need to model the relationship between posts and hashtags. However, hashtags in comments or user bios are not searchable, so we don't need to model them.
