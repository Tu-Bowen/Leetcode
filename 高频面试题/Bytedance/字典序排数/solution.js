/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let res = []
    function dfs(num) {
        let realNum = Number(num.join(""))
        if (realNum > n) return
        if (0 < realNum && realNum <= n) res.push(realNum)
        for (let i = 0; i <= 9; i++) {
            dfs([...num, i])
        }
    }
    for (let i = 1; i <= 9; i++) {
        dfs([i])
    }
    return res
};
console.log(lexicalOrder(13))