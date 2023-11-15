/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @returns {array}
 */

const solution = (row, col, currentRow = [], resultArr = []) => {
  if (resultArr.length === row) return resultArr;

  currentRow.push(0);
  if(currentRow.length === col) {
    resultArr.push(currentRow);
    currentRow = [];
  }

  return solution(row, col, currentRow, resultArr)
}

module.exports = {
  solution
}
