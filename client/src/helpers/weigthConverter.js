export default function weightConverter(string) {
  let result;
  if (string.weight === "NaN") return 100;
  if (string.weight.includes("-")) {
    result = string.weight.split(" - ");
    let num1 = Number(result[0]) || Number(result[1]) - 4; // Set this to 4 as average uses to be 4kg less.
    // This can be set to just return the weight that is valid.
    result = (num1 + Number(result[1])) / 2;
  } else result = Number(string.weight);
  return result;
}
