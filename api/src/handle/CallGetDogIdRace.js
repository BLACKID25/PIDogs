const {dogsByIdRace} = require("../controller")
const dogNames = require("./CallGetDogName")



const dogIdRace = async (req, res) => {
    try {
        
        console.log("PASO POR DOGIDRACE")
        const { idRaza  } = req.params  //! id requerido por params
       // console.log("Este es el Id:", id)

       
        console.log("el Id recibido es el", idRaza)
        const dogidrace = await dogsByIdRace(idRaza)
       // console.log("Esto es dogidrace")
       // console.log(dogidrace)
        if(dogidrace) res.status(200).json(dogidrace)
        else return res.status(404).send({message: "ID de raza no encontrado"})
    } catch (error) {
        return res.status(400).json("No Dogs para mostrart")
    }
}
module.exports = dogIdRace
