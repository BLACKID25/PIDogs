require("dotenv").config()
const axios = require("axios")
const {Dog, Temp} = require("../db")
const {Op} = require("sequelize")
const dataDB = require("../help/dataDB")
const dataApi = require("../help/dataApi")

const {KEY_API_DOGS} = process.env

const url = `https://api.thedogapi.com/v1/breeds?api_key=${KEY_API_DOGS}`

const dogsByName = async (name) => {
    try {
        
        //!busqueda en la BD
        const dogDB = await Dog.findAll({
            where:{
                name:{[Op.substring]:name}
            },
            include: Temp,
        })
        if(dogDB.length){
            dogDB = dogDB.map((ele)=>dataDB(ele))
        }
        
        //!busqueda en la API
        
        const { data }= await axios.get(url)  //! extraemos la data de la APi 
        const resuldogapi = data.filter((ele)=>    // filtramos para trernos el nombre
        ele.name.toLowerCase().includes(name.toLowerCase())
        )
        console.log(resuldogapi)
        if(resuldogapi){
            resuldogapi = resuldogapi.map((ele) => dataApi(ele))
        }
        
        const dogname = [
            ...dogDB,
            ...resuldogapi
        ]
        if (!dogname.length)
            throw new Error('No hay resultados')
         else 
            return dogname;

    } catch (error) {
        throw new Error('No hay resultados')
    }
}
module.exports=dogsByName
