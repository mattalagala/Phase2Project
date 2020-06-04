const express = require('express')
const passport = require('passport')
const cookieSession = require('cookie-session')
require('./passport') 



const db = require('./lib/db')
// const validate = require('./lib/validate')

const app = express()

// serve files out of the public directory
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

const port = 9999

//Cookie Sessions
app.use(cookieSession({
  name: 'musicmonk-session',
  keys: ['key1', 'key2']
}))

//Check if User is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user){
    next()
  } 
  else {
    res.sendStatus(401)
  }
}

//Google Authentication functions
app.use(passport.initialize());
app.use(passport.session());

// set the template engine
app.set('view engine', 'hbs')


app.get('/logged_out', (req, res)=>{
  res.send('You are not logged in!')
})

//Google Route Failure
app.get('/failed', (req, res)=> res.send('Login Failed'))
app.get('/success', isLoggedIn, (req, res)=> {
  db.getCategoryList()
  .then((lists)=>{ 
  res.render('index', {lists: lists})
  })
})


// Google Authentication
app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));


app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success')
  })


// const isAuthenticated = function authenticate () {
//   if (passport.authenticate.user.id == '') {
//     console.log('#@#@##@ I GUESSSS IT WORKED @##$#@#@#$')
//   } else (
//     console.log('!!!!! GUESS IT DIDNT WORK !!!!')
//   )
// }

app.get('/logout', (req, res)=>{
  req.session = null
  req.logout()
  res.redirect('/logged_out')
})


// // Shows the lists on the homepage
app.get('/', function (req, res) {
  db.getCategoryList()
  .then((lists)=>{ 
    res.render('index', {lists: lists})
  }) 
})

app.param('category_id', function (req, res, nextFn, category_id) {
 const getProductsPromise = db.getProducts(category_id)
 const getCategoryPromise = db.getCategory(category_id)
    Promise.all([getProductsPromise, getCategoryPromise])
  .then(([products, category]) => {
    req.monkMusic = req.monkMusic || {}
    req.monkMusic.products = products
    req.monkMusic.category = category
    console.log('******* THIS IS THE PRODUCTS *******')
    console.log(category, '*****HEEEEYYYYYYYYYYYYYYY')
    nextFn()
  })
  .catch((err)=> {
    console.log('AARHHHHHH DIDNT WORK', err)
    res.status(404).render('error_page')
  })
})

app.get('/category/:category_id', function (req, res) {
  const theProducts = req.monkMusic.products
  const productCategoryTitle = req.monkMusic.category[0]['category_name']
  console.log(productCategoryTitle, '**#*#*#*#*#*#* CHECK THIS OUT!!')
  db.getCategoryList()
  .then((lists)=>{ 
    res.render('products_page', {theProducts:theProducts, categoryTitle: productCategoryTitle})
    }) 
  })

  app.param('products_id', function (req, res, nextFn, products_id) {
       db.getItem(products_id)
       .then((item)=> {
       req.monkMusic = req.monkMusic || {}
       req.monkMusic.item = item
       console.log('******* THIS IS THE PRODUCTS *******')
       console.log(item, '*****HEEEEYYYYYYYYYYYYYYY')
       nextFn()
     })
     .catch((err)=> {
       console.log('AARHHHHHH DIDNT WORK', err)
       res.status(404).send('error_page')
     })
   })
   
   app.get('/category/:category_id/:products_id', function (req, res) {
     const theItem = req.monkMusic.item
     console.log(theItem, '**#*#*#*#*#*#* getItem PROMISE')
     db.getProductsList()
     .then((result)=>{ 
       res.render('item_page', {theItem:theItem})
       })
      .catch((err)=>{
       console.log('bannnaaanna')
       res.status(404).send('error_page')
       })
     })

const startExpressApp = () => {
  app.listen(port, () => {
    console.log('express is listening on port ' + port)
  })
}

function bootupSequenceFailed (err) {
  console.error ('Uh Ohh... could not connect to the database!:', err)
  console.error ('Goodbye!')
  process.exit(1)
}

function fetchCategoryList () {
  db.getCategoryList()
  .then((lists)=>{
    // console.log ('the lists:')
    // console.log (lists)
  })
}

function fetchProductsList () {
  db.getProductsList()
  .then((products)=>{
    console.log (products)
  })
}

// Global kickoff point
db.connect()
  .then(startExpressApp)
  .then(fetchProductsList)
  .then(fetchCategoryList)
 
  .then(()=> {
    console.log ('You connected to the database!')
    })
  .catch(bootupSequenceFailed)
