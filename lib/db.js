const knexLib = require('knex')
const dbCfg = require('../knexfile')
const { uuid } = require('./utils')

// this will hold our database connection
let conn = null

// this should return a promise
function connect () {
   return new Promise(function (resolve, reject) {
    conn = knexLib(dbCfg.development)
    conn.raw(`SELECT 1 + 1 AS test`)
      .then((result) => {
        if (result.rows.length === 1 && result.rows[0].test === 2) {
          console.log('Database connection established 👍')
          resolve()
        } else {
          reject('Database was unable to do 1 + 1 🤷')
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

//Category Query

const getCategoryListQuery = `SELECT * FROM category`

function getCategoryList () {
  return conn.raw(getCategoryListQuery)
    .then((result) => {
      return result.rows
    })
}
 
  const getProductsListQuery = `SELECT * FROM products`

  function getProductsList () {
    return conn.raw(getProductsListQuery)
      .then((result) => {
        return result.rows
      })
  }
  

  // const getListQuery = `SELECT * FROM list WHERE uuid = ?`
  
  // const getListItemsQuery = `
  //   SELECT *
  //   FROM list_items
  //   WHERE list_id = ?
  //   ORDER BY display_order
  //   `



// function getList (uuid) {
//   return new Promise(function (resolve, reject) {
//     conn.raw(getListQuery, [uuid])
//       .then((result) => {
//         if (result && result.rows && result.rows.length === 1) {
//           return result.rows[0]
//         } else {
//           reject('list not found')
//         }
//       })
//       .then((theList) => {
//         conn.raw(getListItemsQuery, [theList.id])
//           .then((result) => {
//             theList.items = result.rows
//             resolve(theList)
//           })
//           .catch(() => {
//             reject('unable to get listItems')
//           })
//       })
//       .catch(() => {
//         reject("getList query failed")
//       })
//   })
// }

// const createItemQuery = `
//   INSERT INTO list_items (uuid, description, display_order, ctime, mtime, list_id)
//   VALUES (?, ?, ?, current_timestamp, current_timestamp, ?)
//   RETURNING *
//   `

// function createItem (listId, description) {
//   return conn.raw(createItemQuery, [uuid(), description, 999, listId])
//     .then((result) => {
//       return result.rows[0]
//     })

// -----------------------------------------------------------------------------
// Public API

module.exports = {
  connect: connect,
  getCategoryList: getCategoryList,
  getProductsList: getProductsList
  // // createItem: createItem
}