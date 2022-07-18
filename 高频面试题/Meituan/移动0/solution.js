/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let l = 0
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] !== 0) {
            let t = nums[r]
            nums[r] = nums[l]
            nums[l] = t
            l++
        }
    }
};
moveZeroes([0, 1, 0, 3, 12])