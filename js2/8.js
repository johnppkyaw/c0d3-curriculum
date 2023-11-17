/**
 * Replicate Array.prototype.map function and call it cMap
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_map.asp
 */

const solution = () => {
  Array.prototype.cMap = function (cb, element, index = 0, array = this, newArr = []) {
    if(array.length === index) return newArr;

    element = element || array[index];
    newArr.push(cb(element, index, array))
    index += 1;

    return this.cMap(cb, array[index], index, array, newArr);
  }
}

module.exports = {
  solution
}
