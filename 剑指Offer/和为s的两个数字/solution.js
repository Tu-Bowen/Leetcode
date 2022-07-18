/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
     let n=nums.length,l=0,r=n-1
     while(l<r){
         let sum=nums[l]+nums[r]
         if(sum===target)return [nums[l],num[r]]
         else if(sum<target){
             l++
         }else if(sum>target){
             r--
         }
     }
     return []
};