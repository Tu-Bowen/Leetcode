/**
 * @param {number} n
 * @return {number}
 */
 var nthUglyNumber = function(n) {
    let dp=new Array(n+1)
    dp[1]=1
    let p2=1,p3=1,p5=1
    for(let i=2;i<=n;i++){
        let num2=dp[p2]*2,num3=dp[p3]*3,num5=dp[p5]*5
        let number=Math.min(num2,num3,num5)
        dp[i]=number
        if(number===num2)p2++
        if(number===num3)p3++
        if(number===num5)p5++
    }
    return dp[n]
};
console.log(nthUglyNumber(10))