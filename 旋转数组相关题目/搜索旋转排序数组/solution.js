/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let n = nums.length, left = 0, right = n - 1;
    if(n===1)return nums[n-1]===target?0:1
    while(left<=right){
        const mid = left + Math.floor((right-left)/2)
        if(nums[mid]==target){
            return mid
        }
        if(nums[mid]<nums[0]){
            if(nums[mid]<target&&target<=nums[n-1]){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }else if(nums[mid]>nums[0]){
            if(nums[0]<=target&&target<nums[mid]){
                right = mid -1;
            }else{
                left = mid+1;
            }
        }else{
            left++
        }
    }
    return -1
};