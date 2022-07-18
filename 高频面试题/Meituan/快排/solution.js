/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) { 
    quickSort(nums,0,nums.length-1)
};
function quickSort(nums,low,high) {
    if(high<=low)return
    let idx = getIndex(nums, low, high)
    quickSort(nums,low,idx-1)
    quickSort(nums,idx+1,high)
}
function getIndex(nums, low, high) {
    let tmp = nums[low]
    while (low < high) {
        while (low < high && nums[high] >= tmp) {
            high--
        }
        nums[low] = nums[high]
        while (low < high && nums[low] <= tmp) {
            low++
        }
        nums[high] = nums[low]
    }
    nums[low] = tmp
    // console.log(nums)
    return low
}

let a = [100, 2, 8, 6, 9, 7, 2, 34, 7, 8, 23, 4, 9, 8]
sortArray(a)
// a.sort((a,b)=>a-b)
// [2,2, 4, 6, 7,  7,8,   8, 8, 9, 9, 23,34, 100]
console.log(a)