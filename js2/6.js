/**
 * Write a function called solution that
 *   that takes in an array of functions and a number,
 *     and calls each function input milliseconds after another
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time, index = 0) => {
  if(arr.length === index) return;

  setTimeout(() => {
    const currFunc = arr[index];
    currFunc();
    solution(arr, time, index += 1)
  }, time)
}

module.exports = {
  solution
}
