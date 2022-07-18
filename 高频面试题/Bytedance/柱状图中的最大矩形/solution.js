/**
 * @param {number[]} heights
 * @return {number}
 */
var _largestRectangleArea = function (heights) {
    let dp = new Array(heights.length), ans = Math.max(...heights)
    for (let i = 0; i < heights.length; i++) {
        dp[i] = new Array(heights.length).fill(0)
        dp[i][i] = heights[i]
    }
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[j] >= dp[i][j - 1])
                dp[i][j] = dp[i][j - 1]
            else
                dp[i][j] = heights[j]
            // if ((j - i + 1) * dp[i][j] > ans) {
            //     console.log(i, j,dp[i][j],(j - i + 1) * dp[i][j])
            // }
            ans = Math.max(ans, (j - i + 1) * dp[i][j])
        }
    }
    // console.log(dp)
    return ans
};
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let stack = [], left = [], right = new Array(heights.length)
    for (let i = 0; i < heights.length; i++) {
        while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop()
        }
        left.push(stack.length === 0 ? -1 : stack[stack.length - 1])
        stack.push(i)
    }
    stack = new Array()
    for (let i = heights.length - 1; i >= 0; i--) {
        while (stack.length !== 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop()
        }
        right[i]=(stack.length === 0? heights.length : stack[stack.length-1])
        stack.push(i)
    }
    let ans=0
    for(let i=0;i<left.length;i++){
        ans=Math.max(ans,(right[i]-left[i]-1)*heights[i])
    }
    // console.log(left)
    // console.log(right)
    return ans
};
console.log(largestRectangleArea([6,7,5,2,4,5,9,3]))
