/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    let n = arr.length
    let dp = new Array(n).fill().map(() => new Array(n).fill(0))
    let m = new Map()
    let res=2
    for (let i = 0; i < n; i++) {
        m.set(arr[i], i)
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let temp=arr[i]-arr[j]
            if (m.has(temp)&&m.get(temp)<j){
                dp[i][j]=dp[j][m.get(temp)]+1
            }else{
                dp[i][j]=2
            }
            res=Math.max(res,dp[i][j])
        }
    }
    return res
};