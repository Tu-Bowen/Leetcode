/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let l = 0, r = nums.length - 1
    while (l < r) {
        let mid = l + Math.floor(r - l) / 2
        let isOdd = ((r - mid) % 2 === 0)
        if (nums[mid] === nums[mid - 1]) {
            if (isOdd) {
                r = mid - 2
            } else {
                l = mid + 1
            }
        } else if (nums[mid] === nums[mid + 1]) {
            if (isOdd) {
                l = mid + 2
            } else {
                r = mid - 1
            }
        } else {
            return nums[mid]
        }
    }
    return nums[l]
};