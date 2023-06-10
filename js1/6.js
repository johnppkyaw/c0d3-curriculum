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
  if (num === 0 || num === 1) return false;
  while(i < num) {
    if (num % i === 0) {
      return false;
    } else {
      i++;
    }
  }
  return true
}

module.exports = {
  solution
}
