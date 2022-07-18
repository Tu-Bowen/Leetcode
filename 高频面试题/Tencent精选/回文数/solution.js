/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    x=x+"" 
    let l=0,r=x.length
    while(l<r){
        if(x[l]===x[r]){
            l++
            r--
        }else{
            return false
        }
    }
    return true
};