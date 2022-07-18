/**
 * @param {number[]} nums
 * @return {number} 
 */
var findNumberOfLIS = function (nums) {
    let n = nums.length, dp = new Array(n).fill(0), cnt = new Array(n).fill(0),maxLen=0,ans=0
    for (let i = 1; i < n; i++) {
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                if(dp[j]+1>dp[i]){
                    dp[i]=dp[j]+1
                    cnt[i]=cnt[j]
                }else if(dp[j]+1==dp[i]){
                    cnt[i]=cnt[i]+cnt[j]
                }
            }
        }
        if(dp[i]>maxLen){
            maxLen=dp[i]
            ans=cnt[i]
        }else if(dp[i]==maxLen){
            ans=ans+cnt[i]
        }
    }
    return ans
};