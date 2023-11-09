const allDogsApi = require("./CallGetApiDogs");
const allDogsBD = require("./CallGetDBDogs");
const dogsByIdRace = require("./CallGetDogsByIdRace");
const dogsByName = require("./CallGetDogsByName");
const getTemp = require("./CallGetTemperament");
const dogPost = require("./CallPostDogs");
const relTemDog = require("./CallTempRela");

module.exports = {
  allDogsApi,
  allDogsBD,
  dogsByIdRace,
  dogsByName,
  getTemp,
  dogPost,
  relTemDog,
};
