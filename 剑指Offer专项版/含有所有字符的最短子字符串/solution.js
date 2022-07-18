/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
    if(t.length>s.length)return ""
    let m = new Array(60).fill(0)
    let l = 0, minLen = s.length+1,minStr=""
    function hasAll() {
        for (let i = 0; i < m.length; i++) {
            if (m[i] <0) return false
        }
        return true
    }
    let i = 0
    for (; i < t.length; i++) {
        m[t[i].charCodeAt() - 'A'.charCodeAt()]--
        m[s[i].charCodeAt() - 'A'.charCodeAt()]++
    }
    if(hasAll())return s.substr(0,t.length)
    for (; i < s.length; i++) {
        let ascll = s[i].charCodeAt() - 'A'.charCodeAt()
        m[ascll]++
        while (hasAll()) {
            if (i - l + 1 < minLen) {
                minLen=i-l+1
                minStr=s.substr(l,minLen)
            }
            m[s[l++].charCodeAt()-'A'.charCodeAt()]--
        }
    }
    return minStr
};
