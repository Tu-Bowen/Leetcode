/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let n = nums.length, res = 0
    for (let i = 0; i < 32; i++) {
        let bit = 1, p = 0
        bit = (bit << i)
        for (let o = 0; o < n; o++) {
            if ((bit & nums[o]) !== 0) {
                p++
            }
        }
        if ((p % 3) !== 0) {
            res=(res|bit)
        }
    }
    return res
};