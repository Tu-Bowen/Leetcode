/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let n = matrix.length
    for (let i = 0; i < n; i++) {
        let markr = new Array(n).fill(false), pr = n
        let markc = new Array(n).fill(false), pc = n
        for (let j = 0; j < n; j++) {
            if (!markr[matrix[i][j]]) {
                pr--
                markr[matrix[i][j]] = true
            } else if (markr[matrix[i][j]]) {
                return false
            }
            if (!markc[matrix[j][i]]) {
                pc--
                markc[matrix[j][i]] = true
            } else if (markc[matrix[j][i]]) {
                return false
            }
        }
        if (pr !== 0 || pc !== 0) return false
    }
    return true
};
/**
 * 最少交换次数来组合所有的 1 II
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    if (nums.length < 4) return 0
    let n = nums.length, sum = 0
    for (let i = 0; i < n; i++) {
        sum += nums[i]
    }
    let cur = 0
    for (let i = 0; i < sum; i++) {
        cur += (1 - nums[i])
    }
    let ans = cur
    for (let i = 1; i < n; i++) {
        if(nums[i-1]===0){
            cur--
        }
        if(nums[(i+sum-1)%n]===0){
            cur++
        }
        ans=Math.min(cur,ans)
    }
    return ans
};
/**
 * 统计追加字母可以获得的单词数
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
 var wordCount = function(startWords, targetWords) {

};
/**
 * 全部开花的最早一天
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
 var earliestFullBloom = function(plantTime, growTime) {

};