/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    let n = nums.length, i = 0
    while (i < n) {
        let j = nums[j]
        if (i === j) {
            i++
            continue
        }
        if (j == nums[j]) {
            return j
        }
        swap(nums, i, j)
    }
};
var swap = function (arr, i, j) {
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}