const { pool } = require('../../db')

pool
  .query(
    `
    UPDATE posts
    SET loc = POINT(lng, lat)
    WHERE loc IS NULL;
  `
  )
  .then((result) => {
    console.log('-- UPDATE COMPLETE --')

    pool.end()
  })
  .catch((err) => {
    console.log(err)
    pool.end()
  })
