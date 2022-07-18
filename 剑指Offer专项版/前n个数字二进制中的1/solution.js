/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let dp = new Array(n+1).fill(0)
    let highBit=0
    for(let i=1;i<=n;i++){
        if((i&(i-1))==0){
            highBit=i
        }
        dp[i]=dp[i-highBit]+1
    }
    return dp
};
console.log(countBits(7))