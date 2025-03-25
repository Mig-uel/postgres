# Data Access Pattern - Repository

## The Repository Pattern

The Repository Pattern is a design pattern that abstracts the data access logic from the rest of the application. It provides a separation between the business logic and the data access logic, making the code more maintainable and testable.

The Repository Pattern is commonly used in applications that interact with a database. It encapsulates the data access logic in a separate layer, allowing the business logic to work with domain objects rather than directly interacting with the database.

The Repository Pattern typically consists of the following components:

1. **Repository Interface**: Defines the contract for the repository, specifying the methods that the repository should implement.

2. **Repository Implementation**: Implements the repository interface and provides the actual data access logic.

3. **Domain Objects**: Represents the entities in the application domain. These objects are used to interact with the repository.

4. **Data Mapper**: Maps the domain objects to the database schema and vice versa. It handles the translation between the domain objects and the database tables.

**User Repository**

| Function   | Goal                                                        |
| ---------- | ----------------------------------------------------------- |
| `find`     | Return an array of objects, each object representing a user |
| `findById` | Find a user with the provided ID                            |
| `insert`   | Add a user with some provided properties                    |
| `update`   | Update a user with the provided properties and ID           |
| `delete`   | Remove a user with the provided ID                          |
| `count`    | Return the number of users in the repository                |
| `findOne`  | Find a single user with some provided filtering criteria    |
| `validate` | Make sure a user has valid properties                       |

The User Repository can be implemented as an object with plain functions, as an instance of a class, as a class with static methods, or any other way that makes sense for the application.
