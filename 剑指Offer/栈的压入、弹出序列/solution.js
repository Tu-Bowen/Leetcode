/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
     let n=pushed.length,s=new Array(),o=0
     for(let i=0;i<n;i++){
         s.push(pushed[i])
         while(s.length!==0&&s[s.length-1]===popped[o]){
             s.pop()
             o++
         }
     }
     return s.length===0
};