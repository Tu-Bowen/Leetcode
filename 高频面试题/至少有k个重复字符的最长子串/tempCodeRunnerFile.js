/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    let n = s.length, m = new Map()
    for (let r = 0; r < n; r++) {
        let c = s[r]
        if (m.has(c)) {
            let obj=m.get(c)
            m.set(c, { count: obj.count + 1, index: [...obj.index,r]})
        } else {
            m.set(c, { count: 1, index: [r] })
        }
    }
    let end=0,start=0
    for(let item in m){

    }
};