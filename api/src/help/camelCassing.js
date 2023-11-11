function camelCasing(mainWord) {
    let fixedName;
    if (mainWord.includes("/name")) {
      // Receiving /name?=%22FirstWord%20SecondWord%22
      fixedName = mainWord
        .toLowerCase()
        .replace(/%22/g, "")
        .slice(mainWord.indexOf("=") + 1)
        .split("%20")
        .map((word) => {
          let result = word.charAt(0).toUpperCase() + word.slice(1);
          return result;
        })
        .join(" ");
    } else {
      fixedName = mainWord
        .toLowerCase()
        .split(" ")
        .map((word) => {
          let result = word.charAt(0).toUpperCase() + word.slice(1);
          return result;
        })
        .join(" ");
    }
  
    return fixedName;
  }
  
  module.exports = camelCasing;