/**
 * @param {number} num
 * @return {number[]}
 */
 var findClosedNumbers = function(num) {
    function cntOne(num){
        let cnt = 0
        while(num != 0){
            cnt= cnt+(num%2)
            num =num>>1
        }
        return cnt
    }
     if(num === 1)return[2,-1]
     if(num === 2147483647) return [-1,-1]
     let big=num+1,small=num-1,cnt=cntOne(num)
     while(cntOne(big)!==cnt){
         big++
     }
     while(cntOne(small)!==cnt){
         if(small<0){
             small=-1
             break
         }
         small--
     }
     return [big,small]
};
