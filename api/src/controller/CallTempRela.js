const {Temp} = require("../db")

const relTemDog = async(temp) => {
try {
    if (temp){
        const newarr=[]
        for (let i=0 ;i<temp.lenght; i++){
            const dogtemp = await Temp.findOne({
                where:{
                    name: temp[i]
                },
            })
            if (dogtemp){
                newarr.push(dogtemp.id)
            }
        }
        return newarr
    }else{
        throw "no  exist data Temperamets "
    }
} catch (error) {
        throw new Error(error.message) 
    }
}
module.exports = relTemDog;