/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
     let n=nums.length,arr=[],res=[];
     nums.sort()
     function dfs (cur,flag) { 
         if(cur==n){
             res.push(arr.concat())
             return  
         }
         arr.push(nums[cur])
         dfs(cur+1,true)
         if(flag&&cur>0&&nums[cur]==nums[cur-1]){
            arr.pop() 
            return
         }
         arr.pop()
         dfs(cur+1,false)
      }
      dfs(0,false)
      //console.log(res)
      return res
};

subsetsWithDup([4,4,4,1,4])