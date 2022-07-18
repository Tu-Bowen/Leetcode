function longestPalindrome(s: string): string {
    let n:number=s.length,res:string=s[0],maxLen=1
    const dp=new Array(n)
    for(let i=0;i<n;i++){
        dp[i]=new Array(n).fill(false)
    }
    for(let i:number=0;i<n;i++){
        dp[i][i]=true
    }
    for(let i:number=n-1;i>=0;i--){
        for(let j:number=i+1;j<n;j++){
            if(j===i+1&&s[i]===s[j]){
                dp[i][j]=true
                if(dp[i][j]&&(j-i+1)>maxLen){
                    maxLen=j-i+1
                    res=s.substr(i,maxLen)
                }
                continue
            }
            if(s[i]===s[j]){
                dp[i][j]=dp[i+1][j-1]
            }else{
                dp[i][j]=false
            }
            if(dp[i][j]&&(j-i+1)>maxLen){
                maxLen=j-i+1
                res=s.substr(i,maxLen)
            }
        }
    }
    return res
};
console.log(longestPalindrome("cbbd"))