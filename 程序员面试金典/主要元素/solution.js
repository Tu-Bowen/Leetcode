/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
     nums.sort()
     let maxnum = 1
     if(nums.length === 1||(nums.length==2&&nums[0]==nums[1]))return nums[0]
     for(let i=1;i<nums.length;i++){
         if(nums[i]==nums[i-1]){
             maxnum++
         }else{
             maxnum=1
         }
         if(maxnum>(nums.length/2)){
             return nums[i]
         }
     }
     return -1
};