/**
 * Write a function called solution that
 *   takes in a number
 *   and returns true if the number is a prime number
 *   false otherwise
 * @param {number} num
 * @returns {boolean}
 */

const solution = (num, i = 2) => {
  num = Math.abs(num);
  if (num === 0 || num === 1 || (num !== i && num % i === 0)) return false;
  if (num === i) return true;
  return solution(num, ++i);
}

module.exports = {
  solution
}
