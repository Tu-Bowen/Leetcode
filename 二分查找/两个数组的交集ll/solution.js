/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let i1 = 0, i2 = 0, len1 = nums1.length, len2 = nums2.length, res = []
    while (i1 < len1 && i2 < len2) {
        let n1 = nums1[i1], n2 = nums2[i2]
        if (n1 === n2) {
            res.push(n1)
            i1++
            i2++
        } else if (n1 < n2) {
            i1++
        } else {
            i2++
        }
    }
    return res
};
console.log(intersection([4,9,5],[9,4,9,8,4]))