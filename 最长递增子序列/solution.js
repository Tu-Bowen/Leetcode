/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length,len=0, dp = new Array(n)
    for (let i = 0; i < nums.length; i++) {
        let w=nums[i],l=0,r=len-1
        if(i==0||w>dp[len-1]){
            dp[len]=w
            len++
            continue
        }
        while(l<=r){
            const m=l+Math.floor((r-l)/2)
            if(dp[m]<w){
                l=m+1
            }else{
                r=m-1
            }
        }
        if(l===len){
            len++
        }
        dp[l]=w
    }
    //console.log(dp)
    return len
};

lengthOfLIS([3,5,6,2,5,4,19,5,6,7,12])