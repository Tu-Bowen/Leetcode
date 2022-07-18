/**
 * @param {number[]} nums
 * @return {number}
 */

 var findMin = function(nums) {
    let n=nums.length,left = 0,right = n-1
    while(left<right){
        const mid = left + Math.floor((right-left)/2)
        if(nums[right]<nums[mid]){
            left = mid + 1;
        }else if(nums[n-1]<nums[right]){
            right =mid;
        }else{
            right = right - 1;
        }
    }
    return nums[left]
}; 