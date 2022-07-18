/**
* @param {string} s
* @return {string[]}
*/
var restoreIpAddresses = function (s) {
    const MAXCOUNT = 4
    let seg = new Array(MAXCOUNT)
    let res = []
    function dfs(segId, segStart) {
        if (segId === MAXCOUNT) {
            if (segStart === s.length)
                res.push(seg.join("."))
            return
        }
        if (segStart === s.length) return
        if (s[segStart] === "0") {
            seg[segId]=0
            dfs(segId + 1, segStart + 1)
            // return
        }
        let num = 0
        for (let i = segStart; i < s.length; i++) {
            num = num * 10 + (s[i].charCodeAt() - '0'.charCodeAt())
            if (0 < num && num <= 255) {
                seg[segId] = num
                dfs(segId + 1, i + 1)
            } else break
        }
    }
    dfs(0, 0)
    return res
};
console.log(restoreIpAddresses("25525511135"))