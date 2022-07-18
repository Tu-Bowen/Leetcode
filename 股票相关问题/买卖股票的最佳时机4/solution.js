var maxProfit = function(k, prices) {
    if(k>(prices.length/2)){
        k = Math.floor(prices.length/2)
    }   
    let dp =new Array()
    for(let i=0;i<k+1;i++){
        dp.push({
            out:0,
            in:-prices[0]
        })
    }
    for(let i=0;i<prices.length;i++){
        for(let j=1;j<=k;j++){
            dp[j].in=Math.max(dp[j-1].out-prices[i],dp[j].in)
            dp[j].out=Math.max(dp[j].in+prices[i],dp[j].out)
        }
    }
    return dp[k].out
};
