const express = require("express"); 
const recurso = express.Router();
const {getRecursoById, createRecurso, UpdateRecursoById, deleteRecursoById} = require('../controllers/usersController');
const ValidateUser = require("../models/user.model");


recurso.get('/:id',  getRecursoById);
recurso.post('/',  createRecurso);
recurso.put('/:id',  UpdateRecursoById);
recurso.delete('/:id', deleteRecursoById);

module.exports=recurso;