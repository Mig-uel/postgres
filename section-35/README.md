# Security Around PostgreSQL

## SQL Injection Exploits

SQL injection is a type of security vulnerability that occurs when an attacker is able to manipulate the SQL query that is executed by the application. This can happen when user input is not properly sanitized or validated before being used in a SQL query.

For example, consider the following SQL query:

```sql
SELECT * FROM users WHERE username = 'admin' AND password = 'password123'
```

If the application allows user input to be directly inserted into the query without proper validation, an attacker could input the following value for the `username` field:

```sql
admin' OR '1' = '1
```

The resulting query would look like this:

```sql
SELECT * FROM users WHERE username = 'admin' OR '1' = '1' AND password = 'password123'
```

Since `'1' = '1'` is always true, the query would return all rows from the `users` table, effectively bypassing the authentication mechanism.

To prevent SQL injection attacks, it is important to use parameterized queries or prepared statements, which separate the SQL query from the user input and prevent the input from being interpreted as part of the query.

In our case, we are making a request to:

```plaintext
http://localhost:3005/users/:id
```

If we pass a malicious input like:

```plaintext
http://localhost:3005/users/1; DROP TABLE users;
```

This could potentially drop the `users` table from the database.

To prevent SQL injection attacks, we should always use parameterized queries or prepared statements when interacting with the database.
