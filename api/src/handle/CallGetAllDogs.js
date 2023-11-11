const { allDogsApi } = require("../controller");
const { allDogsBD } = require("../controller");


const allDogs = async (req, res) => {
        try {  
          console.log("aqui estoy")
            const dogsFromApi = await allDogsApi()  //! obtenemos los datos de la API
            const dogsFromDb  = await allDogsBD()   //! obtenemos los datos de la Base de DAtos

            const alldog =
              [  //! creamos un array con toda la informacion 
                ...dogsFromApi,
                ...dogsFromDb
              ]
          
            res.json(alldog)  
        } catch (error) {
                 return res.status(400).json({error:"No tenemos la informacion completa"})
            }
}
module.exports =   allDogs