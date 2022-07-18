/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    //归并排序
    function mergeSort(data) {
        function sort(left, right) {
            if (left >= right) return
            let mid = Math.floor((right - left) / 2) + left
            sort(left, mid)
            sort(mid + 1, right)
            merge(left, mid, right)
        }
        function merge(left, mid, right) {
            let temp = [], l = left, r = mid + 1
            while (l <= mid && r <= right) {
                if (data[l] <= data[r]) {
                    temp.push(data[l])
                    l++
                } else {
                    temp.push(data[r])
                    r++
                }
            }
            for (let i = l; i <= mid; i++) {
                temp.push(data[i])
            }
            for (let i = r; i <= right; i++) {
                temp.push(data[i])
            }
            for (let i = left; i <= right; i++) {
                data[i] = temp[i - left]
            }
        }
        sort(0, data.length - 1)
    }
    mergeSort(nums)
    return nums[nums.length - k]
};