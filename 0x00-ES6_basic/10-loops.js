export default function appendToEachArrayValue(array, appendString) {
  const aArray = [];
  for (let idx of array) {
    idx = appendString + idx;
    aArray.push(idx);
  }

  return aArray;
}
