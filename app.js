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