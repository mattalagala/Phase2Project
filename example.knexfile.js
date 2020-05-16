// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
      connection: {
        database: 'YOUR_DB_NAME_GOES_HERE',
        user:     'YOUR_USERNAME_HERE',
        password: 'YOUR_PASSWORD_HERE'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  };
  