
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
    function calc(arr1, arr2) {
        let m = new Map(), num = 0
        for (let i = 0; i < arr1.length; i++) {
            for (let j = i + 1; j < arr1.length; j++) {
                let k = arr1[i] * arr1[j]
                m.set(k, m.has(k) ? m.get(k) + 1 : 1)
            }
        }
        for (let i = 0; i < arr2.length; i++) {
            let a=arr2[i]*arr2[i] 
            if(m.has(a))num=num+m.get(a)
        }
        return num
    }
    return calc(nums1,nums2)+calc(nums2,nums1)
};
console.log(numTriplets([1,1],[1,1,1]))