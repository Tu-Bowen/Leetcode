/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (0 < nums[i] && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
            let p = nums[i]
            nums[i] = nums[nums[i] - 1]
            nums[p - 1] = p
        }
    }
    let ans = nums.length+1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - 1 !== i) {
            ans = i + 1
            break
        }
    }
    return ans
};

console.log(firstMissingPositive([7, 8, 9, 11, 12]))