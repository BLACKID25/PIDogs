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

//rouDog.get("/dogs", allDogs)
rouDog.get("/dogs/:id", dogIdRace)
rouDog.get('/dogs/', dogName)
rouDog.post("/dogs", postDogs)

module.exports = rouDog