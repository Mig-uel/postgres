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

**Group By**: The `GROUP BY` clause is used to group records that have the same value for a particular field. For example, you might use the `GROUP BY` clause to group all the records in a table that have the same value for a particular field.

- `GROUP BY` is used to group records that have the same value for a particular field
- `GROUP BY` is used with aggregate functions
- `GROUP BY` is used to summarize data

**Example**:

```sql
SELECT user_id
FROM comments
GROUP BY user_id;
```

In this example, we are grouping the records in the `comments` table by the `user_id` field. This means that all the records that have the same value for the `user_id` field will be grouped together.

- Find the set of all unique `user_id` values in the `comments` table
- Take each row and assign it to a group based on the `user_id` value

## Aggregate Functions

**Aggregate Functions**: Aggregate functions are functions that take a collection of values and return a single value. For example, you might use an aggregate function to find the average value of a field, or the total number of records in a table.

- `COUNT()`: Returns the number of rows in a group
- `SUM()`: Returns the sum of the values in a group
- `AVG()`: Returns the average of the values in a group
- `MIN()`: Returns the minimum value in a group
- `MAX()`: Returns the maximum value in a group

**Example**:

```sql
SELECT
  COUNT(*),
  SUM(salary),
  AVG(salary),
  MIN(salary),
  MAX(salary)
FROM
  employees;
```

In this example, we are using the `COUNT()`, `SUM()`, `AVG()`, `MIN()`, and `MAX()` functions to find the number of records in the `employees` table, the sum of the `salary` field, the average `salary`, the minimum `salary`, and the maximum `salary`.

- `COUNT(*)` returns the number of rows in the `employees` table
- `SUM(salary)` returns the sum of the `salary` field in the `employees` table
- `AVG(salary)` returns the average `salary` in the `employees` table
- `MIN(salary)` returns the minimum `salary` in the `employees` table
- `MAX(salary)` returns the maximum `salary` in the `employees` table

# Combining Grouping and Aggregation

**Example**:

```sql
SELECT user_id, COUNT(*)
FROM comments
GROUP BY user_id
```

In this example, we are using the `GROUP BY` clause to group the records in the `comments` table by the `user_id` field, and then using the `COUNT()` function to find the number of records in each group.

- Find the set of all unique `user_id` values in the `comments` table
- Take each row and assign it to a group based on the `user_id` value
- Count the number of rows in each group

## Visualizing More Grouping

**Find the number of comments for each photo**:

```sql
SELECT photo_id, COUNT(*)
FROM comments
GROUP BY photo_id;
```

In this example, we are using the `GROUP BY` clause to group the records in the `comments` table by the `photo_id` field, and then using the `COUNT()` function to find the number of comments for each photo.

- Find the set of all unique `photo_id` values in the `comments` table
- Take each row and assign it to a group based on the `photo_id` value
- Count the number of rows in each group (i.e., the number of comments for each photo)

## Filtering Groups with HAVING

**Having**: The `HAVING` clause is used to filter groups that have a particular property. For example, you might use the `HAVING` clause to find all the groups that have more than a certain number of records.

- `HAVING` is used to filter groups that have a particular property
- `HAVING` is used with aggregate functions
- `HAVING` is used to filter groups after they have been grouped

**WHERE vs. HAVING**:

- `WHERE` is used to filter rows before they are grouped
- `HAVING` is used to filter groups after they have been grouped
- You are never going to use `HAVING` without `GROUP BY`

**Find the number of comments for each photo where the photo_id is less than 3 and the photo has more than 2 comments**:

```sql
SELECT photo_id, COUNT(*)
FROM comments
GROUP BY photo_id
HAVING photo_id < 3 AND COUNT(*) > 2;
```

or

```sql
SELECT photo_id, COUNT(*)
FROM comments
WHERE photo_id < 3
GROUP BY photo_id
HAVING COUNT(*) > 2;
```

In this example, we are using the `GROUP BY` clause to group the records in the `comments` table by the `photo_id` field, and then using the `HAVING` clause to filter the groups where the `photo_id` is less than 3 and the number of comments is greater than 2.

- Find the set of all unique `photo_id` values in the `comments` table
- Take each row and assign it to a group based on the `photo_id` value
- Count the number of rows in each group (i.e., the number of comments for each photo)
- Filter the groups where the `photo_id` is less than 3 and the number of comments is greater than 2
