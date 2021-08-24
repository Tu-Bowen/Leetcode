/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function (s) {
    if (!s.length || s.length < 11) return []

    var n = s.length, set = new Set(), res = []

    for (let l = 0; l < n - 9; l++) {
        var str = ""
        if (l + 9 < n) str = s.substr(l, 10)
        else break;
        if (set.size != 0 && set.has(str)) {
            if(!res.includes(str))res.push(str)
            continue
        } else { set.add(str) }
    }
    return res
};