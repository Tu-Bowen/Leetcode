/**
 * 
 * @param {Array} nums 
 * @param {number} target 
 */
var searchRange = function (nums, target) {
    let l = 0, r = nums.length - 1
    while (l <= r) {
        let mid = Math.floor((r + l) / 2)
        if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    let fst=l
    if (nums[l] !== target) return [-1, -1]
    while (l < nums.length - 1 && nums[l] === nums[l + 1]) {
        l++
    }
    return [fst, l]
};
console.log(searchRange([1], 1))