/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

var canConvert = function (str1, str2) {
    if(str1===str2)return true
    if(str1.length!==str2.length)return false
    function getAscall(char) {
        return char.charCodeAt()
    }
    let count = 0
    let char = new Array(26).fill(0)
    for (let i = 0; i < str2.length; i++) {
        let idx = getAscall(str2[i]) - getAscall('a')
        if (char[idx] === 0) {
            count++
            char[idx] = 1
        }
    }
    if(count===26)return false
    let end = new Array(26).fill(-1)
    for (let i = 0; i < str1.length; i++) {
        let idx = getAscall(str1[i]) - getAscall('a')
        if (end[idx] !== -1 && str2[end[idx]] !== str2[i])
            return false
        end[idx] = i
    }
    return true
};
console.log(canConvert("aabcc","ccdee"))