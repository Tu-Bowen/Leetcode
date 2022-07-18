/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
     let res=[]
     /**
      * @param {String} str 
      */
     function dfs(str,left,right){
         if(str.length===2*n){
             res.push(str.join(""))
         }
         if(left<n){
             dfs([...str,'('],left+1,right)
         }
         if(right<left){
             dfs([...str,')'],left,right+1)
         }
     }
     dfs([],0,0)
     return res
};
console.log(generateParenthesis(3))