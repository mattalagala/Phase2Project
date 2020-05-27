<<<<<<< HEAD
const express = require('express')
const db = require('./lib/db')
// const validate = require('./lib/validate')

const app = express()

// serve files out of the public directory
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

const port = 9999

// set the template engine
app.set('view engine', 'hbs')

app.param('listUUID', function () {
  console.log('Called Only Once')
})

// Shows the lists on the homepage
app.get('/', function (req, res) {
  db.getCategoryList()
  .then((lists)=>{console.log(lists)
    res.render('index', {lists: lists})
  }) 
})

app.get('/category/:category_id', function (req, res) {
  db.getProductsList()
  .then((products)=> {
    res.render('products_page', {products: products})
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

function testSomething () {
  db.getCategoryList()
  .then((lists)=>{
    // console.log ('the lists:')
    // console.log (lists)
  })
}

function testSomething () {
  db.getProductsList()
  .then((products)=>{
    console.log (products)
  })
}


// Global kickoff point
db.connect ()
  .then(startExpressApp)
  .then(testSomething)
  .then(()=> {
    console.log ('You connected to the database!')
    })
  .catch(bootupSequenceFailed)
  

// app.param('listUUID', function (req, res, nextFn, listUUID) {
//   db.getList(listUUID)
//     .then((theList) => {
//       req.inventorydb = req.inventorydb || {}
//       req.inventorydb.list = theList
//       nextFn()
//     })
//     .catch(() => {
//       res.status(404).send('list not found')
//     })
// })

// the homepage shows your lists
// app.get('/', function (req, res) {
//   db.getLists()
//     .then((lists) => {
//       res.render('index', { lists: lists })
//     })
//     .catch(() => {
//       // TODO: show an error page here
//     })
// })

// // the list page shows the items in the list
// app.get('/list/:listUUID', function (req, res) {
//   const theList = req.mr_listman.list
//   res.render('list_page', {
//     listUUID: theList.uuid,
//     listName: theList.name,
//     items: theList.items
//   })
// })

// // add a new item to a list
// app.post('/list/:/new-item', function (req, res) {
//   const theList = req.mr_listman.list
//   const newDescription = req.body.description

//   if (validate.validDescription(newDescription)) {
//     // create the item
//     db.createItem(theList.id, newDescription)
//       .then(function (newItem) {
//         res.render('item_created', {
//           listUUID: theList.uuid,
//           listName: theList.name,
//           description: newItem.description
//         })
//       })
//       .catch(() => {
//         res.status(500).send('oh man, we totally messed up')
//       })
//   } else {
//     // TODO: show them an error page
//     res.status(400).send('bad input')
//   }
// })

// const startExpressApp = () => {
//   app.listen(port, () => {
//     console.log('express is listening on port ' + port)
//   })
// }

// const bootupSequenceFailed = (err) => {
//   console.error('Unable to connect to the database:', err)
//   console.error('Goodbye!')
//   process.exit(1)
// }

// // global kickoff point
// db.connect()
//   .then(startExpressApp)
//   .catch(bootupSequenceFailed)
=======
const express = require ('express')

const app = express()

app.use(express.static ('public'));
app.use(express.urlencoded ({extended: true}));

const port = 9999

app.listen (port, () => {
    console.log('express is listening on port ' + port)
})


app.set ('view engine', 'hbs');

app.get ('/', function(req, res) {
    res.render('index', {title: 'Hey', message: 'Hello Daisy!'})
})
>>>>>>> efda4eeea356a69def513c3e953f5de88243712c
