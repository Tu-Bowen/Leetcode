/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {
     nums.sort((a,b)=>{
         return (''+a+b)-(''+b+a)
     })
     return nums.join('')
};
console.log(minNumber([5,10,3,]))