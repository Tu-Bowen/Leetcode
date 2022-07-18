/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
     let res =[]
     const dfs=(current,temp,target,mark)=>{
         if(temp.length === target){
             res.push(temp)
             return   
         }
         for(let i=current;i<nums.length;i++){
             if(!mark[i]){
                 mark[i]=true
                 dfs(i,[...temp,nums[i]],target,[...mark])
             }
         }
     }
     for(let i=0;i<=nums.length;i++){
         dfs(0,[],i,new Array(nums.length).fill(false))
     }
     return res
};
console.log(subsets([1,2,3]))