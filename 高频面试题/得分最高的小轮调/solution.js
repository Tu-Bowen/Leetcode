/**
 * @param {number[]} nums
 * @return {number}
 */
var bestRotation = function (nums) {
    let n = nums.length, line = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        line[(i - nums[i] + n + 1) % n] -= 1
    }
    let score = 0, maxScore = score, maxIndex = 0
    for (let i = 1; i < n; i++) {
        let nextScore=score+line[i]+1
        if(nextScore>maxScore){
            maxScore=nextScore
            maxIndex=i
        }
        score=nextScore
    }
    return maxIndex
};