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

rouDog.get("", allDogs)   // ESTA OK
rouDog.get("/:idRaza", dogIdRace)  // ESTA OK
rouDog.get("/find/name", dogName) // ESTA OK
rouDog.post("/", postDogs)

module.exports = rouDog