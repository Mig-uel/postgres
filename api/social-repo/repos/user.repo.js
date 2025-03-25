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

  static async insert() {}

  static async update() {}

  static async delete() {}
}

module.exports = {
  UserRepo,
}
