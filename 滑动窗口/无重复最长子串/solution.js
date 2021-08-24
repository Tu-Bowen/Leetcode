/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    var set = new Set()
    if(!s.length||s.length==0)return 0
    let r = 1, n = s.length, max = 1;
    set.add(s[0])
    for (let l = 0; l < n; l++) {
        if (l != 0) {
            set.delete(s[l - 1])
        }
        while (r < n && !set.has(s[r])) set.add(s[r]),r++;
        max = Math.max(max, r - l );
    }
    console.log(max)
    return max
};