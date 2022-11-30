const express = require("express"); 
const users = express.Router();
const {createUser} = require('../controllers/usersController');
const ValidateUser = require("../models/user.model");


users.post('/',  createUser);

module.exports=users;