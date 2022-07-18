/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//额外空间
 var rotate = function(nums, k) {
    const n= nums.length
    let ans = new Array(n)
    for(let i=0;i<n;i++){
        ans[((i+k)%n)] = nums[i]
        console.log((i+k)%n)
    }
    return ans
};
//原地旋转
var reverse=function(start,end,arr){
    while(start<end){
        [arr[start],arr[end]]=[arr[end],arr[start]]
        start++
        end--
    }
}
var rotate = function(nums, k) {
    k=k%nums.length
    reverse(0,nums.length-1,nums)
    reverse(0,k-1,nums)
    reverse(k,nums.length-1,nums)
    return nums
};