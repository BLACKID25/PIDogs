const allDogsApi = require("../controller");
const allDogsBD = require("../controller");


const allDogs = async () => {
        try {
            const dogsFromApi = await allDogsApi()  //! obtenemos los datos de la API
            const dogsFromDb  = await allDogsBD()   //! obtenemos los datos de la Base de DAtos

            const alldog = dogsFromDb 
            ? [  //! creamos un array con toda la informacion 
                ...dogsFromApi,
                ...dogsFromDb
              ] 
            : dogsFromApi
            return res.status(200).json(alldog)  
        } catch (error) {
                 res.status(400).json({message:error.message})
            }
}
module.exports = allDogs;