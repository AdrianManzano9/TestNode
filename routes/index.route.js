const recursoRouter= require("./recurso.route");
const UserRouter= require("./user.route");

const express = require("express");
const indexRoutes = express.Router();

indexRoutes.use('/product',recursoRouter);
indexRoutes.use('/user',UserRouter);

module.exports =indexRoutes;