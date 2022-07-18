/**
 * @param {number} n
 * @return {number[]}
 */
 var printNumbers = function(n) {
     const nums=['0','1','2','3','4','5','6','7','8','9']
     let numOfnine=0,start=n-1
     let res=[]
     function dfs(x){
         if(x.length===n){
            let w = parseInt(x.slice(start))
             if(w!==0)res.push(w)
             if(n-start===numOfnine)start--
             return 
         }
         for(let i=0;i<nums.length;i++){
             if(nums[i]==='9')numOfnine++
             dfs(x+nums[i])
         }
         numOfnine--//很重要的回溯
     }
     dfs("")
     return res
};
console.log(printNumbers(3))