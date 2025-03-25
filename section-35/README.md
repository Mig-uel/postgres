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

**WE NEVER, EVER DIRECTLY CONCATENATE USER INPUT INTO OUR SQL QUERIES!**

There are a variety of safe ways to get user input values into a string that can be used in a query. For example, we can use the `pg` library to create a parameterized query:

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  user:
  host:
  database:
  password:
  port:
});

const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  const values = [id];

  try {
    const { rows } = await pool.query(query, values);
    return rows;
  } catch (error) {
    console.error('Error executing query', error);
  }
};
```

In this example, we use the `$1` placeholder in the query string and pass the actual value as an array in the `values` variable. This ensures that the user input is treated as a value and not as part of the query itself.

By using parameterized queries, we can prevent SQL injection attacks and ensure the security of our application.
