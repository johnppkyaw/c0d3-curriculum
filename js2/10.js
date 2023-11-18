/**
 * Replicate Array.prototype.filter and call it cFilter
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_filter.asp
 */

const solution = () => {
  Array.prototype.cFilter = function (cb, element, index = 0, arr = this, filteredArr = []) {
    if(arr.length === index) return filteredArr;

    element = element || arr[index];
    if(cb(element, index, arr) === true) filteredArr.push(element);
    index += 1;

    return this.cFilter(cb, arr[index], index, arr, filteredArr);
  }
}

module.exports = {
  solution
}
