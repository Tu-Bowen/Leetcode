/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var _reverseLeftWords = function(s, n) {
     let s1=s.substr(0,n)
     let s2=s.substr(n,s.length-n+1)
     return s2+s1
};
var reverseLeftWords = function(s, n) {
    let rs=""
    for(let i=n;i<s.length+n;i++){
        rs=rs+s[i%s.length]
    }
    return rs
};