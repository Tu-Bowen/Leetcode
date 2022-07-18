/**
 * @param {number[][]} box
 * @return {number}
 */
 var pileBox = function(box) {
    const sortbox = box.sort((a,b)=>a[2]-b[2]) 
    const len = box.length
    const dp = new Array(len).fill(0)
    let ans = 0
     for(let i=len-1;i>=0;i--){
         let res = 0
         const temp = sortbox[i]
         for(let j=i+1;j<len;j++){
             if(
                 sortbox[j][0]>temp[0]&&
                 sortbox[j][1]>temp[1]&&
                 sortbox[j][2]>temp[2]
             ){
                 res = Math.max(res,dp[j])
             }
         }
         dp[i] = res + sortbox[i][2]
         ans = Math.max(ans,dp[i])
     }
     return ans
};