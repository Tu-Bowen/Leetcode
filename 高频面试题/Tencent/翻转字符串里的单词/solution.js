/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s.trim()
    let sArr = s.split(" "),p=[]
    for(let i=sArr.length-1;i>=0;i--){
        if(sArr[i]==="")continue
        p.push(sArr[i])
    }
    return p.join(" ")
};
console.log("a  a".split(" "))