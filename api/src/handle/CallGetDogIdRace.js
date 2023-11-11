const {dogsByIdRace} = require("../controller")



const dogIdRace = async (req, res) => {
    try {

        const { id } = req.params  //! id requerido por params
       // console.log("el Id recibido es el", id)
        const dogidrace = await dogsByIdRace(id)
       // console.log("Esto es dogidrace")
       // console.log(dogidrace)
        if(dogidrace) res.status(200).json(dogidrace)
        else return res.status(404).send({message: "ID de raza no encontrado"})
    } catch (error) {
        return res.status(400).json("No Dogs para mostrart")
    }
}
module.exports = dogIdRace
