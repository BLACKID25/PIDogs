import validatorHelper from "./validatorHelper";

const regExName = /^[A-Za-z\s]+$/;
const regExNumbers = /^[1-9]\d*$/;
const regExURL = /^(http|https):\/\/[^\s/$.?#].[^\s]*$/;

export default function validateForm(input) {
  let objectToReturn = {};
  if (!regExName.test(input.name)) {
    objectToReturn.name =
      "Ingrese solo letras, sin números ni caracteres especiales ";
  }
  validatorHelper(
    "height",
    input.minHeight,
    input.maxHeight,
    regExNumbers,
    objectToReturn,
    "Height"
  );
  validatorHelper(
    "weight",
    input.minWeight,
    input.maxWeight,
    regExNumbers,
    objectToReturn,
    "Weight"
  );
  validatorHelper(
    "life_span",
    input.life_span1,
    input.life_span2,
    regExNumbers,
    objectToReturn,
    "Life expectancy"
  );
  if (!regExURL.test(input.image)) {
    objectToReturn.image = "La URL ingresada no es valida";
  }

  let anyError = false;
  for (const key in objectToReturn) {
    if (key) anyError = true;
  }
  if (anyError)
    return {
      ...objectToReturn,
      message: "Complete correctamente toda la información",
    };
  else return { message: "" };
}
