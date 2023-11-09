const { Router } = require('express');
const rouDog = require ("./rouDog")
const tempRouter = require ("./tempRouter")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/dogs", rouDog)
router.use("/temp", tempRouter)



module.exports = router;
