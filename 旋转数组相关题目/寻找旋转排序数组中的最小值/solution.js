/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let n=nums.length,left = 0,right = n-1
    if(nums[right]>nums[left])return nums[left]
    while(left<right){
        const mid = left + parseInt((right-left)/2)
        //console.log(left,right,mid,"   ",nums[left],nums[right],nums[mid])
        if(right- left==1){
            //console.log("ss")
            return Math.min(nums[left],nums[right])
        }
        if(nums[0]<nums[mid]){
                left = mid;
        }else if(nums[mid]<nums[0]){
            right =mid;
        }else{
            //console.log(left,right,mid)
            return Math.min(nums[left],nums[right])
        }
    }
    return nums[left]
}; 
console.log(findMin([3,1,2]))