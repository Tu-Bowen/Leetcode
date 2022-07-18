/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
    let n = s.length, ans = []
    let pre = new Array(100005).fill().map(() => new Array(26).fill(0))
    for (let i = 1; i <= n; i++) {
        let ascll = s[i - 1].charCodeAt() - 'a'.charCodeAt()
        pre[i][ascll]++
        for (let j = 0; j < 26; j++) {
            pre[i][j] += pre[i - 1][j]
        }
    }
    queries.forEach((value) => {
        let odd = 0
        for (let i = 0; i < 26; i++) {
            odd+=((pre[value[1]+1][i]-pre[value[0]][i])%2)
        }
        odd=Math.floor(odd/2)
        ans.push(odd<=value[2])
    })
    return ans
};