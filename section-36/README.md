# Fast Parallel Testing

## A Note on Testing

We will be writing a couple of test files. We are going to be using `jest` to run the test files. `Jest` is a testing framework that will execute our test files all at the same time.
This is atypical compared to other testing frameworks that run tests sequentially. This is a huge advantage because it allows us to run our tests in parallel. This is a huge time saver.

Because we are going to be running our test files in parallel, all of the test files are going to be trying to work with the same database at the same time. This is going to cause some issues. Each test file might interact with the same data at the same time thus creating some conflicts.
