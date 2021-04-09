/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  let result = '';
  let letter = str[0];
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === letter) {
      count++;
    } else if (count === 1) {
      result += letter;
      letter = str[i];
    } else {
      result += `${count}${letter}`;
      letter = str[i];
      count = 1;
    }
  }
  return result;
}

module.exports = encodeLine;
