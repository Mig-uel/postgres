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
