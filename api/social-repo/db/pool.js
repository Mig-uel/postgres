const { Pool } = require('pg')

class Pool {
  _pool = null

  connect(options) {
    this._pool = new Pool(options)
  }
}

module.exports = new Pool()
