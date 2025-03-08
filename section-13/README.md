# PostgreSQL Complex Data Types

## Notes on PGAdmin

- **pgAdmin** is a popular open-source administration and development platform for PostgreSQL.
- It provides a graphical interface to interact with the database, making it easier to manage databases, tables, and queries.
- **pgAdmin** allows you to perform various tasks such as creating databases, tables, and views, executing SQL queries, and managing users and permissions.
- It is a tool to manage and inspect a Postgres database
- Can connect to local or remote databases
- can view/change just about anything in Postgres

**About the Postgres Server**:

- **Server** is the top-level container in pgAdmin
- **Databases** are stored within a server
- **Schemas** are stored within databases
- **Tables** are stored within schemas
- We are running a local server on our machine, running a Postgres Server locally
- A Postgres server can have multiple databases
- All data for a single application is typically stored in a single database
- Having multiple databases is useful for separating different applications or different environments (e.g., development, testing, production)
- Having multiple databases is more about working with more than one app on your machine

## Data Types in PostgreSQL

Data types in PostgreSQL can be broadly classified into two categories:

1. **Simple Data Types**: These are basic data types that store single values. Examples include `integer`, `text`, `boolean`, etc.
2. **Complex Data Types**: These are composite data types that can store multiple values. Examples include `arrays`, `JSON`, `hstore`, etc.

Some of the common data type categories in PostgreSQL are:

| Data Types |           |        |
| ---------- | --------- | ------ |
| Number     | Currency  | Binary |
| Date/Time  | Character | JSON   |
| Geometric  | Range     | Arrays |
| Boolean    | XML       | UUID   |

**Numeric Data Types**:

Numbers without any decimal points

- `smallint`: A small integer (2 bytes) ranging from -32,768 to 32,767.
- `integer`: A standard integer (4 bytes) ranging from -2,147,483,648 to 2,147,483,647.
- `bigint`: A large integer (8 bytes) ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.

No decimal points, auto-incrementing

- `smallserial`: A small auto-incrementing integer (2 bytes) ranging from 1 to 32,767.
- `serial`: A standard auto-incrementing integer (4 bytes) ranging from 1 to 2,147,483,647.
- `bigserial`: A large auto-incrementing integer (8 bytes) ranging from 1 to 9,223,372,036,854,775,807.

Numbers with decimal points

- `decimal(p, s)`: A fixed-point number with `p` digits in total and `s` digits after the decimal point.
- `numeric(p, s)`: An alias for `decimal`.
- `real`: A single-precision floating-point number (4 bytes) ranging from 1.18e-38 to 3.4e+38.
- `double precision`: A double-precision floating-point number (8 bytes) ranging from 2.23e-308 to 1.79e+308 (15 decimal digits).
- `float(p)`: A floating-point number with `p` digits of precision.

## Fast Rules on Numeric Data Types

- Use `integer` for whole numbers.
- Use `decimal` or `numeric` for fixed-point numbers.
- Use `real` or `double precision` for floating-point numbers.
- Use `serial` for auto-incrementing primary keys.

Examples:

- 'id' columns are typically `serial` or `bigserial`
- Need to store a number without a decimal point? Mark the column as `integer`
- Need to store a number with a decimal and this data needs to be precise? Mark the column as `decimal` or `numeric`
  - Bank balance, grams of gold, scientific calculations?
- Need to store a number with a decimal and the precision is not critical? Mark the column as `real` or `double precision`
  - Kilograms of trash in a landfill, liters of water in a lake, air pressure in a tire?

## Reminder on Character Data Types

| Character Data Types | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `char(n)`            | Store some characters, length will always be n even if PG has to insert spaces |
| `varchar(n)`         | Store some characters, length can be up to n                                   |
| `VARCHAR`            | Store some characters, length can be very large                                |
| `TEXT`               | Store lots of characters, length can be very large                             |
| `CITEXT`             | Store some characters, case-insensitive                                        |

## Boolean Data Types

- `boolean`: A true or false value.
- `bit`: A fixed-length bit string.
- `bit varying(n)`: A variable-length bit string.
- `bool`: An alias for `boolean`.
  <br/>
- TRUE
  - true, yes, on, 1, t, y
- FALSE
  - false, no, off, 0, f, n
- NULL
  - NULL

## Date and Time Data Types

- `date`: A date value (YYYY-MM-DD).
- `time`: A time value (HH:MM:SS).
- `timestamp`: A date and time value (YYYY-MM-DD HH:MM:SS).
- `timestamptz`: A timestamp with time zone value.
- `interval`: A time interval.
- `time with time zone`: A time value with time zone.
- `timestamp with time zone`: A timestamp with time zone value.
- `timetz`: An alias for `time with time zone`.
- `timestamptz`: An alias for `timestamp with time zone`.

<br/>

| Date              | Conversion       |
| ----------------- | ---------------- |
| 1980-11-20        | 20 November 1980 |
| Nov-20-1980       | 20 November 1980 |
| 20-Nov-1980       | 20 November 1980 |
| 1980-November-20  | 20 November 1980 |
| November 20, 1980 | 20 November 1980 |

<br/>

| Time     | Conversion          |
| -------- | ------------------- |
| 01:23 AM | 01:23, no time zone |
| 05:23 PM | 17:23, no time zone |
| 20:34    | 20:34, no time zone |

<br/>

| Time With Time Zone | Conversion  |
| ------------------- | ----------- |
| 01:23 AM EST        | 01:23-05:00 |
| 05:23 PM PST        | 17:23-08:00 |
| 05:23 PM UTC        | 17:23+00:00 |

<br/>

| Timestamp With Time Zone | Conversion             |
| ------------------------ | ---------------------- |
| Nov-20-1980 05:23 PM PST | 1980-11-20 18:23:00-07 |
