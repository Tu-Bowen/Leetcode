/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
 var hanota = function(A, B, C) {
     const height = A.length
     let move = (height,A,B,C) => {
         if(height === 1){
             const t = A.pop()
             C.push(t)
             return
         }
         move(height-1,A,C,B)
         move(1,A,B,C)
         move(height-1,B,A,C)
     }
     move(height,A,B,C)
     return C
};
hanota([2,1,0],[],[])