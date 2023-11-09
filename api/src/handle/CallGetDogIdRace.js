const {dogsByIdRace} = require("../controller/CallGetDogsByIdRace")



const dogIdRace = async (req, res) => {
    try {
        const {id} = req.params  //! id requerido por params
        const dogidrace = await dogsByIdRace (id)
        if(dogidrace) res.status(200).dogidrace
        else return res.status(404).send({message: "ID de raza no encontrado"})
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}
module.exports = dogIdRace
