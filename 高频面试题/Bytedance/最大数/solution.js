/**
 * @param {number[]} nums
 * @return {string}
 */
var _largestNumber = function (nums) {
    nums.sort((a, b) => {
        let sa = 10, sb = 10
        while (a >= sa) sa = sa * 10
        while (b >= sb) sb = sb * 10
        console.log(a,sa,b,sb)
        return ("" + (sa * b + a)) - ("" + (sb * a + b))
    })
    console.log(nums)
    if (nums[0] === 0) return "0"
    return nums.join("")
};
/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function(nums) {
    nums.sort((a,b)=>{
       return (b+""+a)-(a+""+b)
    })
    if(nums[0]===0)return "0"
    return nums.join("")
};


let x = 5;
function fn(x) {
    return function(y) {
        console.log(y + (++x));
    }
}
let f = fn(6);
f(7);   
console.log(x);
