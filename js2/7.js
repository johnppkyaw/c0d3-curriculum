/**
 * Replicate Array.prototype.forEach and call it cForEach
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_forEach.asp
 */

const solution = () => {
  Array.prototype.cForEach = function(cb, element, index = 0, arr = this) {
    if(arr.length === index) return;

    element = element || arr[index];
    cb(element, index, arr);
    index += 1;

    return this.cForEach(cb, arr[index], index, arr);
  }
}

module.exports = {
  solution
}
