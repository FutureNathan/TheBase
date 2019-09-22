//-----------------
//DEPENDANCIES
//-----------------
//express
const express = require('express');
//mongoose
const mongoose = require('mongoose');
const app = express();
//Sessions
const sessions = require('express-session');
//CORS
const cors = require('cors');
//dotenv
require('dotenv').config();
const PORT = process.env.PORT || 3000;
//Mongoose
const db = mongoose.connection;

//-------------------
//MIDDLEWARE
//-------------------
app.use(express.json());
app.use(express.static('./app/public'));
app.use(sessions({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(cors());

//---------------------
//CONTROLLERS
//---------------------
const userController = require('./src/controllers/users.js');
app.use('/users', userController);
const sessionsController = require('./src/controllers/sessions.js');
app.use('/sessions', sessionsController);
//Add additional controllers below...

//Main Server Route for user login session
app.get('/', (req, res) => {
  if(req.session.currentUser){
    res.json(req.session.currentUser);
  } else {
    res.status(401).json({
      status: 401,
      message: "Not Logged In"
    });
  }
});
//--------------------
//DATABASE CONNECTION
//--------------------
//Connect to MongoDB Cloud Atlas
//add mongodb uri once we have it
mongoose.connect(/* insert Mongodb uri variable here */, {useNewUrlPaser: true});
//Error / Success - Development Side
db.on('error', (error) => {
  console.log(error.message + ' is MongoD not running?');
})
db.on('connected', () => {
  console.log('Mongo Connected: ', /* insert Mongodb uri variable here */);
})
db.on('disconnected', () => {
  console.log('Mongo Disconnected');
})
//Connect to MongoDB locally
mongoose.connection.once('open', () => {
  console.log('Connected to Mongoose');
})
//--------------------
//LISTENERS
//--------------------
app.listen(PORT, () => {
  console.log('Listening...');
})
