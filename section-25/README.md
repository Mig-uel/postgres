# Advanced Query Tuning

## Developing an Intuitive Understanding of Cost

What does cost mean in the context of query optimization? Amount of time (seconds? milliseconds?) to execute some part of our query plan. (not accurate, but a good starting point).

**Example 1**: SELECT \* FROM users WHERE username = 'Alyson14'; (1 row returned)
**Planner**:

1. Look at users_username_idx (index on username column)
2. Fetch all users and search through them

Number 1 is much faster than number 2. The planner will choose the first option because it is more efficient.
But, how does the planner know that number 1 is faster? How can the planner really decide which plan is fastest without executing the query?

**1st Option**:
| Look at the username index |
| -------------------------- |
| Find the ID's of users who's username is 'Alyson14' |
| Get root node |
| Jump to some random child |
| Process the values in that node |
| Open the users heap file |
| Jump to each block that has the users we are looking for |

**2nd Option**:
| Fetch all users and search through them |
| ------------------------------------- |
| Open the users heap file |
| Load all users from the first block |
| Process each user, see if the username is 'Alyson14' |
| Repeat for each block until we find the user |

#### AI Supplemental Notes

Cost is a measure of the resources required to execute a query. It is an important concept in query optimization, as it helps the database engine decide how to execute a query efficiently.
Cost is not an absolute measure but rather a relative measure that allows the optimizer to compare different execution plans. The cost is expressed in arbitrary units, and the optimizer uses statistics about the data to estimate the cost of different plans.

When you run a query, the database engine has to decide how to execute it. This decision is based on the cost of different execution plans. The cost is a measure of the resources required to execute the query, such as CPU time, memory usage, and disk I/O.
The database engine uses a cost-based optimizer to evaluate different execution plans and choose the one with the lowest cost. The cost is not an absolute measure but rather a relative measure that allows the optimizer to compare different plans.

The cost is expressed in arbitrary units, and the optimizer uses statistics about the data to estimate the cost of different plans. The optimizer considers factors such as the number of rows in a table, the distribution of values in columns, and the presence of indexes.
The optimizer uses this information to estimate the cost of different execution plans and choose the one with the lowest cost.

The cost is not a fixed value but rather a dynamic value that can change based on the data and the execution environment. The optimizer uses statistics about the data to estimate the cost of different plans, and these statistics can change over time as the data changes.

The optimizer uses this information to estimate the cost of different execution plans and choose the one with the lowest cost.
