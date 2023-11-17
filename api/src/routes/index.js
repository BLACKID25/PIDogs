const { Router } = require('express');
const rouDog = require ("./rouDog")
const tempRouter = require ("./tempRouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const { allDogs } = require("../handle/CallGetAllDogs")



const router = Router();


//router.get("/dogs", allDogs)
router.use("/dogs", rouDog)
router.use("/temperaments", tempRouter)  // Funciona ok



module.exports = router;
