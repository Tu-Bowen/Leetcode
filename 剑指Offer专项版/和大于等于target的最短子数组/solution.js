/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let n = nums.length, pre = new Array(n+1), ans = 10001
    pre[0] = 0
    for (let i = 1; i <= n; i++) {
        pre[i] = pre[i - 1] + nums[i-1]
    }
    if (pre[n] < target) return 0
    if (pre[n] === target) return n
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (target <= (pre[i] - pre[j])) {
                ans = Math.min(ans, i - j )
            }
        }
    }
    return ans===10001?0:ans
};
console.log(minSubArrayLen(11,[1,2,3,4,5]))