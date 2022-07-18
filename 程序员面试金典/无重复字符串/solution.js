/**
 * @param {string} S
 * @return {string[]}
 */
 var permutation = function(S) {
     let res =[],mark =new Array(S.length).fill(false)
     let dfs = (str,mark)=>{
         if(str.length === S.length){
             res.push(str.join(""))
             return
         }
         for(let i=0;i<S.length;i++){
             if(!mark[i]){
                 str.push(S[i])
                 mark[i]=true
                 dfs([...str],[...mark],i)
                 str.pop()
                 mark[i]=false
            } 
         }
     }
     for(let i=0;i<S.length;i++){
         mark[i]=true
         dfs([S[i]],[...mark])
         mark[i]=false
     }
     return res
};
console.log(permutation('qwe'))