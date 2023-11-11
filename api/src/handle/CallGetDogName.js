const { dogsByName } = require("../controller");
const camelCasing = require("../help/camelCassing");
const allDogs = require("./CallGetAllDogs")


const dogNames = async(req, res) =>{
    try {
        const { name } = req.query
        //name = name.toLowerCase()
        
        
        if(!name){
            return res.status(401).json({message: "Debe ingresar un nombre de Dog"})
        }
        let data = await dogsByName(name); 
        //console.log("data")
         
         if (!data[0]) {
            throw new Error('No se encontraron resultados')
         } else {
            return res.status(200).json(data)
         }  
     } catch (error) {
         return res.status(500).json({ message: error })
     }
    }
module.exports = dogNames

