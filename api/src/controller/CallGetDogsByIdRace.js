const {Dog, Temp} = require("../db")
const axios = require("axios")
const {dataApi} = require("../help")
const {KEY_API_DOGS} = process.env

const url = `https://api.thedogapi.com/v1/breeds?api_key=${KEY_API_DOGS}`


const dogsByIdRace = async () => {
    try {
        if(id.includes("-")){   //! validamos si el ID contiene un -, si esta, este viene de la BD
            res = await Dog.findOne({      // ! nos traemos la inf d ela BD
                where: {
                  id: id
                },
                include: Temp
              })
        res.dataValues.temperament = res.Temp.map((ele) => ele.name)
        } else{    //! sino contiene el - hacemos la consuta de la API y traemos la informacion
            const { data } = await axios.get(url)
            res = data.find((ele)=> ele.id === id)
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