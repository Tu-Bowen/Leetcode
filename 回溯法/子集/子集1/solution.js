/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
     let arr=[],res=[],n=nums.length;

     function dfs(cur){
         if(cur==n){
             console.log(arr)
             res.push(arr.concat())
             return
         }
         //算上cur的元素
         arr.push(nums[cur])
         dfs(cur+1)
         //不算上cur的元素
         arr.pop(nums[cur])
         dfs(cur+1)
     }
     dfs(0)
     //console.log(res)
     return res
};

subsets([1,2,3])
