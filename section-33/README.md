# Accessing PostgreSQL from APIs

## Understanding Connection Pools

In a typical web application, multiple clients (users) interact with the server, which in turn interacts with the database. Each client request requires a connection to the database to fetch or update data.

Creating a new connection for each client request can be inefficient and resource-intensive. This is where connection pooling comes into play.

A connection pool is a cache of database connections that are reused across multiple client requests. When a client request comes in, the server can quickly assign an available connection from the pool, reducing the overhead of creating a new connection each time.

Connection pooling helps improve the performance and scalability of web applications by managing database connections efficiently.

When you create a client it can only execute one query at a time. If we ever get multiple requests at the same time, we need to create multiple clients to handle those requests.
Rather than using a client directly, we can use a pool of clients. This pool of clients can handle multiple requests at the same time. Essentially, a pool maintains a list of clients and assigns them to different requests as needed. Anytime that we need to run a query, we essentially ask the pool to run a query for you and hand it off to a client that is available.
