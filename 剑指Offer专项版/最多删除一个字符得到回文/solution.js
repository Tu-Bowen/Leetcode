/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    function isHuiwen(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false
            left++
            right--
        }
        return true
    }
    let l = 0, r = s.length - 1
    while (l < r) {
        if (s[l] !== s[r])
            return isHuiwen(left + 1, right) || isHuiwen(left, right - 1)
        l++
        r--
    }
    return true
};