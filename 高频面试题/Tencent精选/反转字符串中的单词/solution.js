/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    var reverse = function (s) {
        s=s.split("")
        let l = 0, r = s.length - 1
        while (l < r) {
            let a = s[l]
            s[l] = s[r]
            s[r] = a
            l++, r--
        }
        return s.join("")
    };
    let strArr = s.split(" ")
    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i]!==""){
            strArr[i]=reverse(strArr[i])
        }
    }
    return strArr.join("")
};
