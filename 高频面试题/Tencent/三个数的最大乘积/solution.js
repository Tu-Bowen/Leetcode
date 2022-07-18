/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let n = nums.length,min1=1001,min2=1002,max1=-1001,max2=-1002,max3=-1003
    if(n===3)return nums[0]*nums[1]*nums[2]
    for (let i = 0; i < n; i++) {
        if(nums[i]<min1){
            min2=min1
            min1=nums[i]
        }else if(nums[i]<min2){
            min2=nums[i]
        }
        if(nums[i]>max1){
            max3=max2
            max2=max1
            max1=nums[i]
        }else if(nums[i]>max2){
            max3=max2
            max2=nums[i]
        }else if(nums[i]>max3){
            max3=nums[i]
        }
    }
    // console.log(min1,min2,max1,max2,max3)
    return Math.max(min1*min2*max1,max1*max2*max3)
};
maximumProduct([-100,-98,-1,2,3,4])