# Simple - But Powerful - SQL Statements

## What is PostgreSQL?

SQL is the language used to interact with databases. PostgreSQL is a powerful, open-source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.

## Challenges of Postgres

1. Writing efficient queries to retrieve information from the database.
2. Designing the schema, or structure, of the database.
3. Understanding when to use advanced features of PostgreSQL, such as indexes, views, and triggers.
4. Managing the database, including backups, replication, and scaling in a production environment.

## Writing Queries

#### Database Design Process

1. What kind of thing are we storing?
2. What properties does this thing have?
3. What type of data does each property have?

Example: A database to store a list of cities.

1. What kind of thing are we storing?
   - Cities
2. What properties does this thing have?
   - name
   - country
   - population
   - area
3. What type of data does each property have?
   - name: string
   - country: string
   - population: number
   - area: number

#### Creating a Table

1. We should create a table called `cities` to store the information.
2. The table should have columns for `name`, `country`, `population`, and `area`.
3. Each column should have a data type that matches the type of data we want to store.

| Cities            |                      |                         |                   |
| ----------------- | -------------------- | ----------------------- | ----------------- |
| **name** (string) | **country** (string) | **population** (number) | **area** (number) |
| Paris             | France               | 2141000                 | 105               |
| Tokyo             | Japan                | 13929286                | 2187              |
| New York          | USA                  | 8336697                 | 468               |

**SQL**: Creating a `cities` table.

```sql
CREATE TABLE cities (
  name VARCHAR(100),
  country VARCHAR(100),
  population INT,
  area INT
)
```

Explanation:

- `CREATE TABLE cities` creates a new table called `cities`.
- `(name VARCHAR(100), country VARCHAR(100), population INT, area INT)` defines the columns of the table.
- `VARCHAR(100)` is a variable-length string with a maximum length of 100 characters.
- `INT` is an integer data type, which stores whole numbers without decimal points.

Keywords: Tells the database what to do.
Identifiers: Names of tables, columns, and other objects.
Data Types: The type of data that can be stored in a column.

#### Inserting Data

**SQL**: Inserting data into the `cities` table.

```sql
INSERT INTO cities (name, country, population, area)
VALUES ('Paris', 'France', 2141000, 105),
       ('Tokyo', 'Japan', 13929286, 2187),
       ('New York', 'USA', 8336697, 468),
       ('London', 'UK', 8908081, 1572);
```

Explanation:

- `INSERT INTO cities` inserts data into the `cities` table.
- `(name, country, population, area)` specifies the columns where the data will be inserted.
- `VALUES ('Paris', 'France', 2141000, 105)` specifies the values to be inserted into the columns.
- Multiple rows can be inserted in a single `INSERT` statement.

#### Retrieving Data

**SQL**: Retrieving all data from the `cities` table.

```sql
SELECT * FROM cities;
```

or

```sql
TABLE cities;
```

Explanation:

- `SELECT *` retrieves all columns from the table.
- `FROM cities` specifies the table from which to retrieve the data.
- `TABLE cities` is a shortcut to display the contents of the table.

**SQL**: Retrieving specific columns from the `cities` table.

```sql
SELECT name, country FROM cities;
```

Explanation:

- `SELECT name, country` retrieves only the `name` and `country` columns.
- `FROM cities` specifies the table from which to retrieve the data.

#### Calculating Columns

SQL is not just about pulling raw data out of a table. We can write SQL to transform or process the data before it is returned.

**SQL**: Calculating the population density of cities.

```sql
SELECT name, population / area AS population_density
FROM cities;
```

Explanation:

- `population / area` calculates the population density by dividing the `population` by the `area`.
- `AS density` renames the calculated column to `density`.

We are not limited to just dividing columns. We can use any mathematical operation to calculate new columns:

- `+` for addition
- `-` for subtraction
- `*` for multiplication
- `/` for division
- `%` for modulo
- `^` for exponentiation
- `sqrt()` for square root
- `abs()` for absolute value

#### String Operations

SQL also supports string operations to manipulate text data:

- `||` for concatenation
- `UPPER()` to convert text to uppercase
- `LOWER()` to convert text to lowercase
- `LENGTH()` to get the length of a string
- `LEFT()` to get the leftmost characters of a string
- `RIGHT()` to get the rightmost characters of a string
- `CONCAT()` to concatenate strings

**SQL**: Concatenating the `name` and `country` columns.

```sql
SELECT name || ', ' || country AS location
FROM cities;
```

Explanation:

- `name || ', ' || country` concatenates the `name`, a comma and space, and the `country`.
- `AS location` renames the concatenated column to `location`.
