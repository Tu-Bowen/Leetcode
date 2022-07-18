/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1, n = nums.length
    if(nums[0]===target)return 0
    if(nums[n-1]===target)return n-1
    while (l < r) {
        let mid = (l + r) >> 1
        if (nums[mid] === target) return mid
        if (nums[mid] < nums[n - 1]) {
            if (nums[mid] < target && target < nums[n - 1]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        } else {
            if (nums[0] < target && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    return nums[l] === target ? l : -1
};
search([1, 3], 3)