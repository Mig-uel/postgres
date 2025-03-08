# Database-Side Validation and Constraints

## 3 Different Forms of Row-Level Validation

**Row-Level Validation** is the process of ensuring that the data in a row meets certain criteria or constraints. This can be done using various techniques, such as:

1. **Data Type Validation**: Ensures that the data in a column is of the correct type (e.g., integer, text, date).
2. **Length Validation**: Ensures that the length of the data in a column is within a specified range.
3. **Value Validation**: Ensures that the data in a column meets certain criteria (e.g., positive numbers, valid email addresses).
4. **Uniqueness Validation**: Ensures that the data in a column is unique across all rows in the table.

<hr/>

Things we can check for when a row is being inserted or updated:

- Is a given value defined?
- Is a value unique in its column?
- Is a value >, <, >=, <=, =, some other value?
