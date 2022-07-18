/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let num = 0, template = "", getTemp = 0, ans = "", stack = []
    for (let i = 0; i < s.length; i++) {
        if (getTemp === 0 && !isNaN(Number(s[i]))) {
            num = num * 10 + Number(s[i])
        } else if (s[i] === '[') {
            if(getTemp!==0){
                template+=s[i]
            }
            getTemp++
        } else if (s[i] === ']') {
            getTemp--
            if (getTemp === 0) {
                let sonStr = decodeString(template)
                for (let i = 0; i < num; i++) {
                    ans += sonStr
                }
                template = ""
                num = 0
            } else {
                template += s[i]
            }
        } else {
            if (getTemp!==0) template += s[i]
            else ans += s[i]
        }
    }
    return ans
};
console.log(decodeString("2[abc]3[cd]ef"))