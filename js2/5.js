/**
 * Write a function called solution that
 *   Takes in an array of functions and a number,
 *   and calls every function input milliseconds later
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time, index = 0) => {
  if(index === arr.length) return;

  const currFunc = arr[index];
  setTimeout(() => currFunc(), time);

  return solution(arr, time, index += 1);
}

module.exports = {
  solution
}
