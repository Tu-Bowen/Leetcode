/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
    if (k === 0) return 1
    let dp = new Array(m),res=m*n
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(true)
    }
    var ok = (i, j, k) => {
        let ri = 0, ji = 0
        while (i !== 0) {
            ri += (i % 10)
            i = Math.floor(i / 10)
        }
        while (j !== 0) {
            ji += (j % 10)
            j = Math.floor(j / 10)
        }
        return (ri + ji) <= k
    }
    for (let i = 1; i < m; i++) {
        //console.log(i)
        if (!ok(i, 0, k) || !dp[i - 1][0]) {
            dp[i][0] = false
            res--
        }
    }
    for (let i = 1; i < n; i++) {
        if (!ok(i, 0, k) || !dp[0][i - 1]) {
            dp[0][i] = false
            console.log("..")
            res--
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if((!dp[i-1][j]&&!dp[i][j-1])||!ok(i,j,k)){
                dp[i][j]=false
                res--
            }
        }
    }
    //console.log(res)
    return res
};

movingCount(7,2,3)