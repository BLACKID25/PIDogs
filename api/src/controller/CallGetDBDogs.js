const { Dog, Temp } = require("../db")

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

module.exports=allDogsBD;
