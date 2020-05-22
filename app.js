const express = require('express')
const db = require('./lib/db')
const validate = require('./lib/validate')

const app = express()

// serve files out of the public directory
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

const port = 9999

// set the template engine
app.set('view engine', 'hbs')

app.param('listUUID', function (req, res, nextFn, listUUID) {
  db.getList(listUUID)
    .then((theList) => {
      req.mr_listman = req.mr_listman || {}
      req.mr_listman.list = theList
      nextFn()
    })
    .catch(() => {
      res.status(404).send('list not found')
    })
})

// the homepage shows your lists
app.get('/', function (req, res) {
  db.getLists()
    .then((lists) => {
      res.render('index', { lists: lists })
    })
    .catch(() => {
      // TODO: show an error page here
    })
})

// the list page shows the items in the list
app.get('/list/:listUUID', function (req, res) {
  const theList = req.mr_listman.list
  res.render('list_page', {
    listUUID: theList.uuid,
    listName: theList.name,
    items: theList.items
  })
})

// add a new item to a list
app.post('/list/:listUUID/new-item', function (req, res) {
  const theList = req.mr_listman.list
  const newDescription = req.body.description

  if (validate.validDescription(newDescription)) {
    // create the item
    db.createItem(theList.id, newDescription)
      .then(function (newItem) {
        res.render('item_created', {
          listUUID: theList.uuid,
          listName: theList.name,
          description: newItem.description
        })
      })
      .catch(() => {
        res.status(500).send('oh man, we totally messed up')
      })
  } else {
    // TODO: show them an error page
    res.status(400).send('bad input')
  }
})

const startExpressApp = () => {
  app.listen(port, () => {
    console.log('express is listening on port ' + port)
  })
}

const bootupSequenceFailed = (err) => {
  console.error('Unable to connect to the database:', err)
  console.error('Goodbye!')
  process.exit(1)
}

// global kickoff point
db.connect()
  .then(startExpressApp)
  .catch(bootupSequenceFailed)