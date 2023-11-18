/**
 * Creates Array.prototype.cFind that has the same functionality as find
 *   If nothing was found, return undefined (which should be default
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

const solution = () => {
  Array.prototype.cFind = function (cb, element, index = 0, arr = this) {
    if(arr.length === index) return;

    element = element || arr[index];
    if(cb(element, index, arr) === true) return element;
    index += 1;

    return this.cFind(cb, arr[index], index, arr);
  }
}

module.exports = {
  solution
}
