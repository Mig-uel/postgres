const pool = require('../db/pool')

class UserRepo {
  static async find() {
    return (
      await pool.query(`
        SELECT * FROM users;
      `)
    ).rows
  }

  static async findById() {}

  static async insert() {}

  static async update() {}

  static async delete() {}
}

module.exports = {
  UserRepo,
}
