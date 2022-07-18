var kSmallestPairs = function (nums1, nums2, k) {
    let res = [], minStack = []
    for (let i = Math.min(nums1.length, k) - 1; i >= 0; i--) {
        minStack.push([i, 0])
    }
    while (res.length < k && minStack.length !== 0) {
        let [i, j] = minStack.pop()
        res.push([nums1[i], nums2[j]])
        if (j+1 >= nums2.length ) continue
        let length = minStack.length
        for (let m = length - 1; m >= 0; m--) {
            let [i1,j1]=minStack[m]
            if(nums1[i1]+nums2[j1]>=nums1[i]+nums2[j+1]){
                minStack.splice(m+1,0,[i,j+1])
                break
            }
        }
        if(length===minStack.length)minStack.unshift([i,j+1])
    }
    return res
};
console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3))



























