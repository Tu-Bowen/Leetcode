/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let n = nums.length, pre = 0, m = new Map()
    if (n < 2) return false
    m.set(0, -1)
    for (let i = 0; i < n; i++) {
        pre = (pre + nums[i])%k
        if (m.has(pre)) {
            let index = m.get(pre)
            if ((i - index) >= 2) {
                return true
            }
        } else { 
            m.set(pre, i) 
        }
    }
    //console.log(m)
    return false
};
console.log(checkSubarraySum([5,0,0,0],3))
