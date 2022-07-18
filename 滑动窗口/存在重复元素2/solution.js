/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let n = nums.length, s = new Set()
    for (let i = 0; i < n; i++) {
        if (s.has(nums[i])) {
            return true
        }
        s.add(nums[i])
        if (i - k >= 0) {
            s.delete(nums[i - k])
        }
    }
    return false
};
console.log(containsNearbyDuplicate([1, 2, 1], 0))