/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let ans = 0, m = new Map(), count = 0
    m.set(count, -1)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) count++
        else if (nums[i] === 0) count--
        if (m.has(count)) {
            ans = Math.max(ans, i - m.get(count))
        } else {
            m.set(count,i)
        }
    }
    return ans
};
console.log(findMaxLength([0, 1, 0, 1]))