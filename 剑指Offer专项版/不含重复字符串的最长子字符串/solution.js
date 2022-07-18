/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0, n = s.length,m=new Map(),ans=0
    for (let r = 0; r < n; r++) {
        if(m.has(s[r])){
            l=Math.max(l,m.get(s[r])+1)
        }
        m.set(s[r],r)
        ans=Math.max(ans,r-l+1)
    }
    return ans
};