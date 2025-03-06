# Aggregation of Records

## Aggregation and Grouping

**Grouping**: Grouping is the process of combining records that have something in common. For example, you might group all the records that have the same value for a particular field.

- Reduces many rows down to fewer rows
- Can be used to count, sum, average, etc.
- Done with the `GROUP BY` clause
- Visualizing the result is key to use

**Aggregation**: Aggregation is the process of summarizing data. For example, you might want to count the number of records that have a particular value for a field, or find the average value of a field.

- Reduces many values down to one value
- Can be used to count, sum, average, etc.
- Done with the `COUNT`, `SUM`, `AVG`, etc. functions
- Done by using 'aggregate functions'

## Picturing Grouping

**Example**:

```sql
SELECT user_id
FROM comments
GROUP BY user_id;
```

In this example, we are grouping the records in the `comments` table by the `user_id` field. This means that all the records that have the same value for the `user_id` field will be grouped together.

- Find the set of all unique `user_id` values in the `comments` table
- Take each row and assign it to a group based on the `user_id` value

