const { Dog, Temp } = require("../db")
const { dataDB } = require("../help/dataDB")

const allDogsBD = async () => {
    try{
        const dogsdb = await Dog.findAll({
            include:[
                { 
                    model:Temp,
                    attributes: [  //! incluimos solo estos atributos
                        'id', 
                        'name'
                    ],
                    through: { attributes: [] }
                }
            ]
        })

        return dogsdb.map((ele) => ele.toJSON());
} catch (error) {
  return error
}

} 
    // // const resuldog = dogsdb.map((data)=>  dataDB(data))
    // //      return resuldog.reverse();
    // }catch(error){
    //     throw new Error(error.message)
    // }
//}
module.exports=allDogsBD;

// return pokemons.map((pokemon) => pokemon.toJSON());
// } catch (error) {
//   return error
// }

// } 