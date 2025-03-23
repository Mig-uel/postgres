# Handling Concurrency and Reversibility with Transactions

## Transactions

Transactions are a way to ensure that a series of operations are completed successfully or not at all. This is important in scenarios where multiple operations depend on each other, and you want to maintain data integrity.

We can use transactions to group multiple SQL statements into a single unit of work. If any statement fails, the entire transaction can be rolled back, ensuring that the database remains in a consistent state.

**Transfer $50 from Alyson to Gia**

1. Withdraw $50 from Alyson's account

```sql
UPDATE accounts
SET balance = balance - 50
WHERE name = 'Alyson';
```

2. Add $50 to Gia's account

```sql
UPDATE accounts
SET balance = balance + 50
WHERE name = 'Gia';
```

3. Check if both operations were successful

```sql
SELECT * FROM accounts WHERE name IN ('Alyson', 'Gia');
```

4. If both operations were successful, commit the transaction. If any operation fails, roll back the transaction.

A transaction would be useful in this case to ensure that both operations are completed successfully or not at all. If either operation fails, we can roll back the transaction to maintain data integrity. For example, if the first operation succeeds but the server crashes before the second operation can be completed, we would want to roll back the first operation to ensure that Alyson's account is not debited without crediting Gia's account.

## Opening and Closing Transactions

In PostgreSQL, we can open a transaction using the `BEGIN` statement and close it using either `COMMIT` to save the changes or `ROLLBACK` to discard the changes.

```sql
BEGIN;

-- SQL statements go here

COMMIT; -- Save the changes

-- or

ROLLBACK; -- Discard the changes
```

By default, PostgreSQL runs in autocommit mode, which means that each SQL statement is treated as a separate transaction. To group multiple statements into a single transaction, we need to explicitly open and close the transaction using `BEGIN`, `COMMIT`, and `ROLLBACK`.

Running a bad command will cause the transaction to fail, and be put into an 'aborted' state. You must then run `ROLLBACK` to undo the changes.

Losing the connection to the database will also cause the transaction to fail, and will automatically rollback the transaction.
