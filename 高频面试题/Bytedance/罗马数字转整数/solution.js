/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let m = new Map()
    m.set("I",1)
    m.set('V', 5)
    m.set('X', 10)
    m.set('L', 50)
    m.set('C', 100)
    m.set('D', 500)
    m.set('M', 1000)
    let ans=0
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && m.get(s[i]) < m.get(s[i + 1])) {
            ans=ans-m.get(s[i])
        } else {
            ans=ans+m.get(s[i])
        }
        // console.log(ans)
    }
    return ans
};
console.log(romanToInt("LVIII"))