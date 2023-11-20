require("dotenv").config()
const axios = require("axios")
const {Dog, Temp} = require("../db")
const dataApi = require("../help/dataApi")
const {KEY_API_DOGS} = process.env
const url = `https://api.thedogapi.com/v1/breeds?api_key=${KEY_API_DOGS}`


const dogsByName = async (name) => {

       // console.log("Name que llega del handleName es:", name)
    try {
        
        //!busqueda en la BD
        const dogDB = await Dog.findAll({
            where:{
                name
            },
            include:[
                { 
                    model:Temp,
                    attributes: [  //! incluimos solo estos atributos
                        'id', 
                        'name'
                    ],
                    through: { attributes: [] }
                }
            ]
        })
        if (dogDB.length) 
        return dogDB
        
        //!busqueda en la API
        
        const { data }= await axios.get(url)  //! extraemos la data de la APi 
        const resuldogapi = data.filter((ele)=>    // filtramos para trernos el nombre
        ele.name.toLowerCase().includes(name.toLowerCase())
        )
        //console.log(resuldogapi)
        let resuldogapi2
        
        if (resuldogapi && resuldogapi.length > 0) {
            resuldogapi2 = resuldogapi.map((ele) => dataApi(ele))
            
            console.log(resuldogapi2)
            } else {
              throw new Error('No hay resultados');
            }
        
        const dogname = [
            ...dogDB,
            ...resuldogapi2
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
