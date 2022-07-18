/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let n = strs.length, idx=0,res=""
    while (true) {
        if(!strs[0][idx])
        return res
        let temp=strs[0][idx]
        for (let i = 1; i < n; i++) {
            if(!strs[i][idx]||strs[i][idx]!==temp){
                return res
            }
        }
        res=res+temp
        idx++
    }
};
let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))