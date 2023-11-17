const {Temp} = require("../db")
require("dotenv").config()
const {KEY_API_DOGS} = process.env
const axios =require("axios")

const url = `https://api.thedogapi.com/v1/breeds?api_key=${KEY_API_DOGS}`

const getTemp = async() =>{
    try {
        console.log("PASO A GETTEMP")
       
            const { data } = await axios.get(url)
            //const api = resapitemp.data.results
            let newArrayTemp = []
            data.forEach(ele  => {
                if (ele.temperament){
                    //console.log("dentro del IF")
                    const newtemp = ele.temperament.split (', ')
                    newtemp.forEach(tempera=>{
                        if(!newArrayTemp.includes(tempera)){
                            newArrayTemp.push(tempera)
                        }
                    })
                }
            })

            const tempDb = await Promise.all(newArrayTemp.map(async temperament => {
                const [tempe, created] = await Temp.findOrCreate(
                    {
                        where:
                        { name: temperament } ,
                        default : {name:temperament}
                
            })
            return tempe
            }))
           return tempDb

        
    } catch (error) {
        throw new Error('No hay resultados de temperamentos')
        
    }
}

module.exports = getTemp