require('dotenv').config()

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const dbController = require('./controllers/dbController');


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Declare routes right here.
const routes = require('./routes');


// Prepend / to any route declared inside of routes
app.use(routes);
// app.get('/api/ucbxUsers/github', function(req,res){
//    console.log("Github",req.body.github)
//    dbController.getUserByGithub(req.body.github)
// })
app.listen(PORT, () => console.log('Port started on port: ' + PORT));