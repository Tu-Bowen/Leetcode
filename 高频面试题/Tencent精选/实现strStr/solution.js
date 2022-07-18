/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let str = haystack.slice(i, needle.length + i)
            if (str === needle) {
                return i
            }
        }
    }
    return -1
};
console.log(strStr("hellow","ll"))