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

//--------------------
//DATABASE CONNECTION
//--------------------

//--------------------
//LISTENERS
//--------------------
