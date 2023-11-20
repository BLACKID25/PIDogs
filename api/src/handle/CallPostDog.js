const {dogPost} = require("../controller")


const postDogs = async (req, res) => {
   // console.log("ESTOY EN POSTDOGS")
    const dogData = req.body;
    //console.log(dogData)
    try {
    //     if (dogData.lenght > 0 ) {
    //         console.log("PASE POR EL IF estoy dentro")
        await dogPost(dogData);
    // } 
    
    return res.status(201).json({ message: 'El perro fue creado exitosamente'});
    } catch (error) {
        return res.status(500).json({ error: "Datos no proporcionado" });
    }
}


module.exports=  postDogs 

// const postDogs = async (dogData) => {
//     try {
//         const { name, image, height, weight, life_span } = await dogData
//         if (!image || !name || !height || !weight || !life_span){ 
//             throw Error('Faltan datos.')
//         }
//         const newDog = await Dog.create ({
//             image,
//             name,
//             height,
//             peso,
//             weight,
//             isDB: true
//         });
//         if (dogData.temperaments && dogData.temperaments.length > 0) {
//             const temperaments = await Temp.findAll({
//                 where: {
//                     name: dogData.temperaments,
//                 }
//             })
//             await newDog.setTemperaments(temperaments);
//         }
        
//         return newDog;
//     } catch (error) {
//         throw error;
//     }
// }

// module.exports= { postDogs }


//!Version Original
// const postDogs = async (res, req) =>{
//     try {
//         const  data  = await dogPost(req.body)

//          if(data){
//             // return res.status(404).json({message:" FALTAN DATOS"})
//             const { temp } = req.body
//             const temprela = await relTemDog(temp)
//             await data.addTepm(temprela)
//             res.status(200).json("Creado correctamente en Dogs")
//          } else return res.status(400).json({message: "Dog ya existen"})


//     } catch (error) {
//         return res.status(400).json({message: "No se puede procesar"})
//     }
// }
// module.exports=postDogs