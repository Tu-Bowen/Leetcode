/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
   const res = []
   let dfs = (str,stack,left)=>{
       if(str.length === 2*n){
           res.push(str.join(""))
           return
       }
       if(left<n) dfs([...str,'('],[...stack,'('],left+1)
       if(stack[stack.length-1]&&stack[stack.length-1]==='('){
           stack.pop()
           dfs([...str,')'],[...stack],left)
       }
   }
   dfs(['('],['('],1)
   return res
};