/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
 var multiply = function(A, B) {
    if(A===0||B===0)return 0
    if(A<0) return -1*multiply(-1*A,B)
    if(B<0) return -1*multiply(A,-1*B)
    const min = Math.min(A,B)
    const max = Math.max(A,B)
    if(min%2){
        return max+multiply(min-1,max)
    }else{
        return multiply(min/2,max+max)
    }
};