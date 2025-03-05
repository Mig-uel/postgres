# Relating Records with Joins

## Queries with Joins and Aggregations

Joins are used to combine rows from two or more tables based on a related column between them. The most common type of join is an inner join. Inner joins return rows when there is at least one match between rows in the tables.

99% of the time, you will be using inner joins. However, there are other types of joins such as left joins, right joins, and full joins.

**Joins**:

- Produces values by merging together rows from different related tables
- Use a join most times that you're asked to find data that involves multiple resources

Aggregations are used to perform calculations on the data in a table. The most common aggregations are `COUNT`, `SUM`, `MIN`, `MAX`, and `AVG`.

**Aggregations**:

- Looks at many rows and calculates a single output value
- Words like 'most', 'average', 'least' are a sign that you need to use an aggregation

## Joining Data From Different Tables

To join data from different tables, you need to use the `JOIN` clause. The `JOIN` clause is used to combine rows from two or more tables based on a related column between them.

**For each comment, show the contents of the comment and the username of the user who wrote the comment.**

```sql
SELECT contents, username
FROM comments
JOIN users
ON comments.user_id = users.id;
```

The example above shows how to join the `comments` table with the `users` table. The `ON` keyword is used to specify the column that the two tables are related on.

**For each comment, list the contents of the comment and the URL of the photo the comment was added to.**

```sql
SELECT contents, url
FROM comments
JOIN photos
ON comments.photo_id = photos.id;
```

The example above shows how to join the `comments` table with the `photos` table. The `ON` keyword is used to specify the column that the two tables are related on.

## Alternate Syntax for Joins

Notes on Joins:

- Table order between `FROM` and `JOIN` frequently makes a difference
- We must give context if we have multiple tables with the same column name
- We can use aliases to make our queries more readable
- Tables can be renamed using the `AS` keyword
- There are different types of joins: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`
