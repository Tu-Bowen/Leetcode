/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) return [-1, -1]
    if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1]
    function search(lowwer) {
        let l = 0, ans = nums.length, r = nums.length - 1
        while (l <= r) {
            let mid = Math.floor((r - l) / 2) + l
            if (nums[mid] > target || (lowwer && nums[mid] === target)) {
                r = mid - 1
                ans = mid
            } else {
                l = mid + 1
            }
        }
        return l
    }
    let low = search(true), high = search(false) - 1
    // console.log(low,high)
    if (-1 < low && high < nums.length && low <= high && nums[low] === target && nums[high] === target)
        return [low, high]
    return [-1, -1]
};
searchRange([5, 7, 7, 8, 8, 10], 8)