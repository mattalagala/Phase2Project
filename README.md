# Phase2Project

Create an app that interfaces psql db with frontend.

Installation
npm init -- creates package.json

npm intall knex -- installs knex dependency to interface with pg db

npm install express -- install express.js lib

npm install pg -- installs pg interface for knex and psql

cat package.json -- verify dependecies have been added

npm install knex --save -- creates knexfile.js -- make sure knexfile.js has development environment info.

        module.exports = {

        development: {
            client: 'postgresql',
            connection: {
            database: 'northwind',
            user:     '------',
            password: '------'
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

npx knex init -- create 'knexfile_example.js' -- hides db login information from public repo

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'your database',
      user:     'your username',
      password: 'your password'
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

