require ("dotenv").config();
const axios = require("axios");
const dataApi = require("../help/dataApi");
const { KEY_API_DOGS } = process.env

const url = `https://api.thedogapi.com/v1/breeds?api_key=${KEY_API_DOGS}`

const allDogsApi = async () => {
    try {
        const { data } = await axios.get(url)
      //  console.log(data)
        const dogbreed = data.map((breed) => {
                return dataApi(breed)
            }
        );
         return dogbreed;
      } catch (error){
           throw new Error(error.message);
       }
};
module.exports = allDogsApi
