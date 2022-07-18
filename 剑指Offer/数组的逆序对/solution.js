/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
    let cnt = 0
    function merge(left, right) {
        let i = 0, j = 0,/***/res = []
        let lLen = left.length, rLen = right.length
        while (i < lLen && j < rLen) {
            if (left[i] <= right[j]) {
                res.push(left[i++])
                cnt = cnt + j
            } else {
                res.push(right[j++])
            }
        }
        if (i < left.length) {
            res.push(...left.slice(i));
            cnt += (left.length - i) * j;/** */ // 逆序对增加
        }
        else res.push(...right.slice(j));
        return res
    }
    function mergeSort(arr) {
        if (arr.length < 2) return arr
        let mid = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left, right)
    }
    mergeSort(nums)
    return cnt
};
console.log(reversePairs([7, 5, 6, 4]))