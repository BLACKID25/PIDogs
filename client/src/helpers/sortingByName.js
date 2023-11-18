export default function sortingByName(arrayOfObj) {
  let newObj = arrayOfObj.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
  });
  return newObj;
}
