/**
 * Write a function called solution that
 *   takes in 2 parameters, a number n and string,
 *   and returns the string repeated n number of times
 * @param {number} num
 * @param {string} str
 * @returns {string}
 */

const solution = (num, str, result = '') => {
  return num <= 0 ? result : solution(num - 1, str, result += str);
}

module.exports = {
  solution
}
