/**
 * @param {string} big
 * @param {string[]} smalls
 * @return {number[][]}
 */
var multiSearch = function (big, smalls) {
    var ans =[]
    var find = (s) => {
        let res = []
        for(let i=0,j=0;i<big.length;i++){
            if(s[j]==big[i]){
                j++
            }else{
                i=i-j
                j=0
                 
            }
            if(j==s.length&&s.length!=0){
                res.push(i-s.length+1)
            }
        }
        return res
    }
    smalls.forEach(item=>{
        ans.push(find(item))
    })
    return ans
};