/**
 * 将字符串拆分为若干长度为k的组
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    if (k === 1) return s.split("")
    let r = []
    for (let i = 0; i < s.length; i = i + k) {
        r.push(s.slice(i, i + k))
    }
    if (r[r.length - 1].length < k) {
        for (let i = r[r.length - 1].length; i < k; i++) {
            r[r.length - 1] += fill
        }
    }
    return r
};
/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
    let res = 0
    if (maxDoubles === 0) return target - 1
    while (target !== 1 && maxDoubles !== 0) {
        if (target % 2 === 0 && maxDoubles !== 0) {
            target = target / 2
            maxDoubles--
            res++
        } else {
            target = target - 1
            res++
        }
    }
    return res + target - 1
};
/**
 * 解决智力问题
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
    let n=questions.length
    let dp=new Array(n+1).fill(0)
    for(let i=n-1;i>=0;i--){
        let it=questions[i]
        let idx=i+it[1]+1
        dp[i]=Math.max(dp[i+1],it[0]+(idx<n?dp[idx]:0))
    }    
    return dp[0]
};