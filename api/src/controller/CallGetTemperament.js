const {Temp} = require("../db")
require("dotenv").config()
const {KEY_API_DOGS} = process.env
const axios =require("axios")

const url = `https://api.thedogapi.com/v1/breeds?api_key=${KEY_API_DOGS}`

const getTemp = async() =>{
    try {
        if (url){
            const resapitemp = await axios.get(url)
            const api = resapitemp.data.results
            const tempApi = api.map((temp) => temp.name)

            const createpromises = tempApi.map((temp)=>{
                return Temp.finOrCreate({
                   where: {
                    name: temp
                   }
                })
            })
            await Promise.all(createpromises)
            return tempApi
        } else{
            const res = await Temp.findAll()
            const tempdb = res.map(temp => temp.name)
          return tempdb
        }

        
    } catch (error) {
        throw new Error('No hay resultados')
        
    }
}
module.exports = getTemp