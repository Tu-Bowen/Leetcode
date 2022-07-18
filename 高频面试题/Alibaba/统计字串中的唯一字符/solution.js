/**
 * @param {string} s
 * @return {number}
 */
 var uniqueLetterString = function(s) {
     let ans=0
     for(let i=0;i<s.length;i++){
         let left=i-1,right=i+1
         while(left>-1&&s[i]!==s[left])left--
         while(right<s.length&&s[i]!==s[right])right++
         ans=ans+(i-left)*(right-i)
     }
     return ans
};