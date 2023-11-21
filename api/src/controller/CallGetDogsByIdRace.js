const {Dog, Temp} = require("../db")
const axios = require("axios")
const dataApi = require("../help/dataApi")
const {KEY_API_DOGS} = process.env

const url = `https://api.thedogapi.com/v1/breeds?api_key=${KEY_API_DOGS}`


const dogsByIdRace = async (id) => {
    try {
      
     
        if (id.includes("-")){
          const dogDb = await Dog.findByPk( id,
             {include:[{ 
              model: Temp, 
              attributes: ["name"], 
              through: { attributes: []}
          }]
      })
  
        const { name, image, height, weight, life_span, Temps,  } = dogDb.dataValues;
        
        const newDetailDog = {
                id,
                name, 
                image,
                height,
                weight, 
                life_span, 
                Temps: Temps?.map((temp) => temp.name),
               
            }
           // console.log('Image URL:', image);
           // console.log(gameData)
            return newDetailDog
        } else{    //! sino contiene el - hacemos la consuta de la API y traemos la informacion
            const { data } = await axios.get(url)
            res = data.find((ele)=> ele.id == id)
            //console.log("esto es el resultado de RES")
            //console.log(res)
            if (res) {
                res = dataApi(res)
              }
        }
        return res
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports = dogsByIdRace

