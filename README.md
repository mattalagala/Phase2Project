# Phase2Project

Create an app that interfaces psql db with frontend.

## Workflow

![Image of Yaktocat](https://https://github.com/mattalagala/Phase2Project/blob/master/img/Inventory%20App.jpg)

## Setup

Create an app that interfaces psql db with frontend.

npm init -- creates package.json

npm intall knex -- installs knex dependency to interface with pg db

npm install express -- install express.js lib

npm install pg -- installs pg interface for knex and psql

cat package.json -- verify dependecies have been added

npm install knex --save -- creates knexfile.js -- make sure knexfile.js has development environment info.
   
npx knex init -- create 'knexfile.js' 

  module.exports = {

        development: {
            client: 'postgresql',
            connection: {
            database: 'YOUR DB HERE',
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

cp knexfile.js example.knexfile.js - copies generic knexfile.js template to example.knefile.js

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

ADD KNEXFILE.JS to .gitignore

```

node_modules
.DS_Store
knexfile.js

```



