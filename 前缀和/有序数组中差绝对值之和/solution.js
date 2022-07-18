/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    let n = nums.length, left = new Array(n).fill(nums[0]),ans=new Array(n).fill(0)
    for (let i = 1; i < n; i++) {
        left[i]=left[i-1]+nums[i]
    }
    for(let i=0;i<n;i++ ){
        if(i>0){
            ans[i]=i*nums[i]-left[i-1]
        }
        ans[i]=ans[i]+left[n-1]-left[i]-(n-i-1)*nums[i]
    }
    //console.log(ans)
    return ans
};
getSumAbsoluteDifferences([1,4,6,8,10])