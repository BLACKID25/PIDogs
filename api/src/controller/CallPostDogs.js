const {Dog} = require("../db")

const dogPost = async(data) =>{
    try {
        const { name, image, height, weight, life_span} = data
        if(name && image && height && weight && life_span){
            const name = name.toLowerCase()
            let [newDog] = await Dog.findOrcreate({
                where: {
                    name: name
                },
                defaults:{
                    image, 
                    height, 
                    weight, 
                    life_span
                }
            })
            return newDog;
         } else {
             throw "All fields are required"
         }
               
    } catch (error) {
        throw newError(error.message);
    }
};
module.exports = dogPost
        