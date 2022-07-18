/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
    let n = nums.length
    let index = new Array(n).fill(0).map((_, idx) => idx)
    let tmpIndex = new Array(n).fill(0)
    let tmp = new Array(n)
    let ret = new Array(n).fill(0)
    let mergeSort = function (arr, l, r) {
        if (l === r) return
        let mid = (l + r) >> 1
        mergeSort(arr, l, mid)
        mergeSort(arr, mid + 1, r)
        let p1 = l, p2 = mid + 1, k = l
        while (p1 <= mid || p2 <= r) {
            if (p2 > r || p1 <= mid && arr[p1] > arr[p2]) {
                tmp[k] = arr[p1]
                let t = index[p1++]
                tmpIndex[k] = t
                ret[t] += r - p2 + 1
            } else {
                tmp[k] = arr[p2]
                tmpIndex[k] = index[p2++]
            }
            k++
        }
        for (let i = l; i <= r; i++) {
            index[i] = tmpIndex[i]
            arr[i] = tmp[i]
        }
    }
    mergeSort(nums, 0, n - 1)
    return ret
};
console.log(countSmaller([5, 2, 6, 1]))