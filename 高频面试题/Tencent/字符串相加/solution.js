/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let len1 = num1.length, len2 = num2.length
    let i = len1-1, j = len2-1 
    let up=0,res=""
    while (i >=0 || j >=0) {
        let fst=i>=0?Number(num1[i--]):0
        let sec=j>=0?Number(num2[j--]):0
        let cur=fst+sec+up
        up=Math.floor(cur/10)
        res=(cur%10)+res
    }
    if(up!==0)res=up+res
    return res
};
