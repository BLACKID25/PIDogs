// const { Router } = require('express');
// const rouDog = Router()
const rouDog = require("express").Router()

const {
    allDogs,
    dogIdRace,
    dogName,
    postDogs,
} = require("../handle")


// //! creamos las rutas 

rouDog.get("/", allDogs)
rouDog.get("/:idRaza", dogIdRace)
rouDog.get("/name", dogName)
rouDog.post("/", postDogs)

module.exports = rouDog