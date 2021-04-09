/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const result = [];
  const firstStr = s1.split('');
  const secondStr = s2.split('');
  for (let i = 0; i < firstStr.length; i++) {
    const currentCharacter = firstStr[i];
    if (secondStr.includes(currentCharacter)) {
      secondStr.splice(secondStr.indexOf(currentCharacter), 1);
      result.push(currentCharacter);
    }
  }
  return result.length;
}

module.exports = getCommonCharacterCount;
