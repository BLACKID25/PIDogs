export default function validatorHelper(
  propName,
  minprop,
  maxprop,
  regex,
  obj,
  name
) {
  if (!regex.test(minprop) || !regex.test(maxprop)) {
    obj[propName] = `${name} Ingrese solo números positivos`;
  } else {
    if (Number(minprop) > Number(maxprop)) {
      obj[propName] = `${name} Valor máximo debe ser superior al minimo`;
    }
  }
  return obj;
}
