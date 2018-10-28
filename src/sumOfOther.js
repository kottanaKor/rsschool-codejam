module.exports = function sumOfOther(array) {
  const sumOfAll = array.reduce((a, b) => a + b);
  return array.map(elem => sumOfAll - elem);
};
