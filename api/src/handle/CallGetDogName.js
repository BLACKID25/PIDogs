const { dogsByName } = require("../controller");



const dogNames = async(req, res) =>{
    try {
       //const { name } = req.query

       if (req.query.name) {
            // La consulta se realizó mediante parámetros de consulta
            const dogName = req.query.name;
            //const data = await dogsByName(dogName);
            //console.log(name)
            if(!dogName){
                return res.status(401).json({message: "Debe ingresar un nombre de Dog"})
            }
            
           // console.log("datos despues del IF", dogName)
    //    //
    let data = await dogsByName(dogName); 
         console.log("data")
         
         if (!data[0]) {
             throw new Error('No se encontraron resultados')
         } else {
            return res.status(200).json(data)
         }  
        }
     } catch (error) {
         return res.status(500).json("Error no funciona nnaaaadddaaaaaaaaa")
     }
    }

module.exports = dogNames

