import weightConverter from "./weigthConverter";

export default function sortingByWeight(arrayOfObj, order) {
  let newObj;
  if (order === "asc") {
    newObj = arrayOfObj.sort((a, b) => {
      return weightConverter(a) - weightConverter(b);
    });
  } else {
    newObj = arrayOfObj.sort((a, b) => {
      return weightConverter(b) - weightConverter(a);
    });
  }
  return newObj;
}
