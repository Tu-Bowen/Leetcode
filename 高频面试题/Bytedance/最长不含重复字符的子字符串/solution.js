/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let n = s.length, res = 1, win = new Map()
    win.set(s[0], 0)
    for (let l = 0, r = 1; r < n; r++) {
        if (!win.has(s[r])) {
            win.set(s[r],r)
        } else {
            let lastIdx=win.get(s[r])
            l=Math.max(l,lastIdx+1)
            // console.log("&",r,l)
            win.set(s[r],r)
        }
        if(res<(r-l+1)){
            console.log(r,l)
        }
        res = Math.max(res, r - l + 1)
    }
    // console.log(res)
    return res
};
lengthOfLongestSubstring("abba")