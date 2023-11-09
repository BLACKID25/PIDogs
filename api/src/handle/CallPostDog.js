const {dogPost, relTemDog} = require("../controller")

const postDogs = async (res, req) =>{
    try {
        const { data } = await dogPost(req.body)

         if(!data){
            return res.status(404).json({message: error.message})
         }

        const { temperament } = req.body
        const temprela = await relTemDog(temperament)
            await data.addTepm(temprela)
            return res.status(200).json("Creado correctamente en Dogs")

    } catch (error) {
        return res.status(400).json ({message: error.message})
    }
}
module.exports=postDogs






   