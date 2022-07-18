/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var pairSums = function(nums, target) {
     nums.sort((a,b)=>a-b)
     let ans=[]
     let l=0,r=nums.length-1
     while(l<r){
         if(nums[l]+nums[r]<target){
             l++
         }else if(nums[l]+nums[r]>target){
             r--
         }else{
             ans.push([nums[l],nums[r]])
             l++
             r--
         }
     }
     //console.log(ans)
     return ans
};
pairSums([-2,-1,0,3,5,6,7,9,13,14],12)