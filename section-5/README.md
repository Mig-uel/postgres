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
