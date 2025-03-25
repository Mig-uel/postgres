const express = require('express')
const { pool } = require('./db/index')

const PORT = 3001
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  return res.json({
    message: 'Home Route',
    routes: '/, /posts',
  })
})

app.get('/posts', async (req, res) => {
  const { rows } = await pool.query(`
      SELECT * FROM posts;
    `)

  return res.send(`
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>lng</th>
            <th>lat</th>
            <th>loc</th>
          </tr>
        </thead>

        <tbody>
          ${rows
            .map((row) => {
              return `
              <tr>
                <td>${row.id}</td>
                <td>${row.lng}</td>
                <td>${row.lat}</td>
                <td>(${row.loc.x}, ${row.loc.y})</td>
              </tr>
            `
            })
            .join('')}
        </tbody>

      </table>
      <form method="POST">
            <h3>Create Post</h3>

            <div>
              <label>Lng</label>
              <input type="number" name="lng" required step="0.001"/>
            </div>
            <div>
              <label>Lat</label>
              <input type="number" name="lat" required step="0.001" />
            </div>
            <button type="submit">Create Post</button>
      </form>
    `)
})

app.post('/posts', async (req, res) => {
  const { lng, lat } = req.body

  // insert values into new loc column
  await pool.query(`INSERT INTO posts (loc) VALUES ($1)`, [`(${lng}, ${lat})`])

  return res.redirect('/posts')
})

app.all('*', (req, res) => {
  return res.redirect('/')
})

app.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`)
})
