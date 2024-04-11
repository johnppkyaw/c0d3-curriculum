/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  Array.prototype.cReduce = function (cb, initialVal, accumulator, element, index = 0, arr = this) {
    if (arr.length === index) return accumulator;

    if (index === 0 && initialVal === undefined) {
      accumulator = arr[0];
      index += 1;
      element = arr[1];
    } else if (index === 0 && initialVal !== undefined) {
      accumulator = initialVal;
    }

    element = element || arr[index];
    accumulator = cb(accumulator, element, index, arr);
    index += 1;

    return this.cReduce(cb, initialVal, accumulator, arr[index], index, arr);
  }
}

module.exports = {
  solution
}
