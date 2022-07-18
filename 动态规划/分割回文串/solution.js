/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let n = s.length, dp = new Array(),ans=new Array()
    for (let i = 0; i < n; i++) {
        dp.push(new Array(n).fill(true))
    }
    for (let i = n-1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if(s[i]==s[j]){
                dp[i][j]=dp[i+1][j-1]
            }else{
                dp[i][j]=false
            }
        }
    }
    let dfs=(idx,arr)=>{
        //console.log(idx,arr)
        if(idx==n){
            ans.push([...arr])
            return
        }
        for(let i=idx;i<n;i++){
            if(dp[idx][i]){
                dfs(i+1,[...arr,s.substr(idx,i-idx+1)])
            }
        }
    }
    dfs(0,[])
    //console.log(ans)
    return ans;
};
partition("aab")