const tempRouter = require("express").Router();

const {
    getTemperaments
} = require ("../handle")


//! creamos las rutas 

tempRouter.get("/", getTemperaments)


module.exports = tempRouter