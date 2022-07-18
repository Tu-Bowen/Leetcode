/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let n = nums.length, q = [],res=[]
    for (let i = 0; i < k; i++) {
        while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) {
            q.pop()
        }
        q.push(i)
    }
    res.push(nums[q[0]])
    for (let i = k; i < n; i++) {
        while (q.length > 0 && nums[q[q.length - 1]] <= nums[i]) {
            q.pop()
        }
        q.push(i)
        while(q[0]<(i-k+1)){
            q.shift()
        }
        res.push(nums[q[0]])
    }
    return res
};