const {getTemp} = require ("../controller")

const getTemperaments = async (req, res) =>{
    try {
        let temperaments = await getTemp() 
        
        if(temperaments.length === 0){
            return res.status(401).json({message: "No existe temperaments"})
            } else {
            return res.status(200).send(temperaments)
        }
        
    } catch (error) {

      return res.status(400).json({message:error.message})  
    }
}
module.exports = getTemperaments