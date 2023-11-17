// const {Dog, Temp} = require("../db")
// const { camelCasing } = require("../help/camelCassing")

// const dogPost = async (dogData) => {
//     console.log("YA PASE POR POSTDOGS y ESTOY EN DOGPOST")
//     try {
//         const { name, image, height, weight, life_span } = dogData
//         if (!image || !name || !height || !weight || !life_span){ 
//             throw Error('Faltan datos.')
//         }
//         const newDog = await Dog.findOrCreate({
//             name,
//             image,
//             height,
//             weight,
//             life_span,
//             isDB: true
//         });
//         console.log(dogData)
        
//             console.log("esto es el nuevo perro", newDog)
//             if (dogData.temperaments && dogData.temperaments.length > 0) {
//                 const temperaments = await Temp.findAll({
//                     where: {
//                         name: dogData.temperaments,
//                     }
//                 })
//                 await newDog.setTemperaments(temperaments);
//             }
            
//             return newDog;
//         } catch (error) {
//             throw error;
//         }
//     }
    
//     module.exports=  dogPost



const { NOW } = require("sequelize");
const { Dog, Temp } = require("../db");
const { camelCasing } = require("../help/camelCassing");

const dogPost = async (dogData) => {
  console.log("YA PASE POR POSTDOGS y ESTOY EN DOGPOST");
  try {
    const { name, image, height, weight, life_span } = dogData;
    if (!image || !name || !height || !weight || !life_span) {
      throw Error('Faltan datos.');
    }
   // console.log(dogData)
    //console.log(Dog)

    const newDog = await Dog.create({
            //name, // Buscar por nombre en lugar de crear duplicados
            image,
            name,
            height,
            weight,
            life_span
            //isDB: true,
        
    });
    
    //const [dog, created] = newDog; // Obtener el perro creado o existente

    //console.log("esto es el nuevo perro", newDog);

    if (dogData.temperament && dogData.temperament.length > 0) {
      console.log("dentro if")
      const temperaments = await Temp.findAll({
        where: {
            name: dogData.temperament
          },
        });
      console.log(temperaments)
      await newDog.addTemps(temperaments);
    }
    //console.log("esto es newdog con temperamento",newDog)
    return newDog;
  } catch (error) {
    throw error;
  }
};

module.exports = dogPost;

// const newtemps  = await Promise.all(dogData.temperaments.map( async (id) => await Temp.findAll(Number(id))));


//     newType.forEach(async (type)=>{
//       await newPokemon.addType(type);
//     });




// const dogPost = async(data) =>{
//     try {
//         const { name, image, height, weight, life_span} = data
//         if(name && image && height && weight && life_span){
//             let newName = camelCasing(name)
//             //const name = name.toLowerCase()
//             const [newDog] = await Dog.findOrcreate({
//                 where: {
//                     name: newName,
//                     image, 
//                     height, 
//                     weight, 
//                     life_span,
//                    // isDB: True
//                 }
//             })
//             return newDog;
//          } else {
//              throw "Falta Informacion por agregar"
//          }
               
//     } catch (error) {
//         throw new Error(error.message);
//     }
// };
// module.exports = dogPost
        