export default function validatorHelper(
  propName,
  minprop,
  maxprop,
  regex,
  obj,
  name
) {
  if (!regex.test(minprop) || !regex.test(maxprop)) {
    obj[propName] = `${name} only receives positive valid numbers`;
  } else {
    if (Number(minprop) > Number(maxprop)) {
      obj[propName] = `${name} max value has to be lower than min value`;
    }
  }
  return obj;
}
