const express = require('express'),
      bodyParser = require('body-parser'),
      routes = require('./queries'),
      path = require('path'),
      app = express(),
      port = 8080;


/* ---------- BODY PARSER ---------- */

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


/* ---------- SERVE STATIC FILES ---------- */

app.use(express.static(path.join(__dirname, '../build')));

/* ---------- ROUTES ---------- */

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, express, and API'})
})

// app.get('/users', db.getUsers)
// app.get('/users/:id', db.getUserById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

app.use('/', routes);

/* ---------- CATCH ALL FOR UNKNOWN URL ---------- */

app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || port, function() {
    console.log('You have now connected to the server');
});

/* To start server, node index.js */