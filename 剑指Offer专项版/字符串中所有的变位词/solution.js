/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let m = new Array(26).fill(0),temp=new Array(26).fill(0), ans = [], i = 0, j = 0
    for (; i < p.length; i++) {
        let ascllP=p[i].charCodeAt()-'a'.charCodeAt()
        let ascllS=s[i].charCodeAt()-'a'.charCodeAt()
        m[ascllP]--
        m[ascllS]++
    }
    if(m.toString()===temp.toString())ans.push(0)
    for (; i < s.length; i++) {
        let ascRight=s[i].charCodeAt()-'a'.charCodeAt()
        let ascLeft=s[j++].charCodeAt()-'a'.charCodeAt()
        m[ascRight]++
        m[ascLeft]--
        if(m.toString()===temp.toString())ans.push(i-p.length+1)
    }
    return ans
};
console.log(findAnagrams("cbaebabacd","abc"))