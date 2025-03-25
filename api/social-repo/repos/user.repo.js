const pool = require('../db/pool')

class UserRepo {
  static async find() {
    return (
      await pool.query(`
        SELECT * FROM users;
      `)
    ).rows
  }

  static async findById(id) {
    try {
      return (
        await pool.query(
          `
          SELECT * FROM users
          WHERE id = $1;      
        `,
          [id]
        )
      ).rows
    } catch (error) {
      console.log(error)

      return [
        {
          error,
          users: [],
        },
      ]
    }
  }

  static async insert(username, bio) {
    return (
      await pool.query(
        'INSERT INTO users (username, bio) VALUES ($1, $2) RETURNING *;',
        [username, bio]
      )
    ).rows
  }

  static async update() {}

  static async delete() {}
}

module.exports = {
  UserRepo,
}
