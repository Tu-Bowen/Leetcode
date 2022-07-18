/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
    let n = nums.length, left = 0, right = n - 1;
    if(n===1)return nums[n-1]===target?true:false
    while(left<=right){
        const mid = left + Math.floor((right-left)/2)
        // console.log(left,mid,right)
        // console.log("ww",nums[left],nums[mid],nums[right])
        if(nums[left]==target){
            return true
        }
        if(nums[mid]==target){
            return true
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
            // console.log(left,mid,right)
            // console.log("ww",nums[left],nums[mid],nums[right])
            left++
        }
    }

    return false
};
var a = [1,0,1,1,1]
var b = 0
search(a,b)