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
  
  const getProductsByCategoryNumberQuery = `SELECT * FROM products WHERE category_id = ?`

  function getProducts (category_id) {
    return new Promise (function (resolve, reject) {
      conn.raw(getProductsByCategoryNumberQuery, [category_id])
      .then((result) => {
        resolve(result.rows)
      })
      .catch(()=>{
        reject('getProduct query failed')
      })
    })
  }

  const getCategoryQuery = `SELECT category_name FROM category WHERE category_id = ?`

  function getCategory (category_id) {
    return new Promise (function (resolve, reject) {
      conn.raw(getCategoryQuery, [category_id])
      .then((result) => {
        resolve(result.rows)
      })
      .catch(()=>{
        reject('getProduct query failed')
      })
    })
  }

  const getItemQuery = `SELECT * FROM products WHERE products_id = ?`

  function getItem (products_id) {
    console.log(products_id)
    return new Promise (function (resolve, reject) {
      conn.raw(getItemQuery, [products_id])
      .then((result) => {
        resolve(result.rows)
      })
      .catch((err)=>{
        reject('getItem query failed' + err)
      })
    })
  }

module.exports = {
  connect: connect,
  getCategoryList: getCategoryList,
  getProductsList: getProductsList,
  getProducts: getProducts,
  getCategory: getCategory,
  getItem: getItem
}