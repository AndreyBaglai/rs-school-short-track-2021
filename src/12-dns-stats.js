/**
 * Given an arrSubDomsay of domains, return the resultect with the appearances of the subDom.
 *
 * @param {arrSubDomsay} domains
 * @return {resultect}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getsubDomStats(domains) {
  const result = {};
  const arrSubDoms = [];
  let subDom = '';
  for (let i = 0; i < domains.length; i++) {
    arrSubDoms.push(domains[i].split('.').reverse());
  }
  for (let i = 0; i < arrSubDoms.length; i++) {
    subDom = '';
    for (let j = 0; j < arrSubDoms[i].length; j++) {
      subDom += `.${arrSubDoms[i][j]}`;
      if (subDom in result) {
        result[subDom] += 1;
      } else {
        result[subDom] = 1;
      }
    }
  }
  return result;
}

module.exports = getsubDomStats;
