
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    if (k > nums.length) return false
    nums.sort((b, a) => a - b)
    let sum = nums.reduce((pre, cur) => pre + cur)
    if (sum % k !== 0) return false
    let target = sum / k
    let bucket = new Array(k).fill(0)
    function recur(index) {
        if (index === nums.length) {
            for (let i = 0; i < bucket.length; i++)
                if (bucket[i] !== target) return false
            return true
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] + nums[index] > target) continue
            bucket[i]=bucket[i]+nums[index]
            if(recur(index+1))return true
            bucket[i]=bucket[i]-nums[index]
        }
        return false
    }
    return recur(0)
};