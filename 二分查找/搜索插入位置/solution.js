/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if(target>nums[nums.length-1])return nums.length
    let l = 0, r = nums.length - 1
    while (l < r) {
        console.log(l,r)
        let mid = Math.floor((l + r) / 2)
        if (target === nums[mid]) {
            return mid
        }
        if (target < nums[mid]) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    return l
};
console.log(searchInsert([1,3,5,6],2))