/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let visited = new Array(n + 1).fill(false)
    let groupNum = 1
    for (let i = 2; i <= n; i++) {
        groupNum = groupNum * i
    }
    /**
     * @param {Array} str 
     */
    function dfs(str) {
        let len = str.length
        if (len === n) {
            return str.join("")
        }
        groupNum = groupNum / (n - len)
        for (let i = 1; i <= n; i++) {
            if(visited[i])continue
            if(groupNum<k){
                k=k-groupNum
                continue
            }
            visited[i]=true
            return dfs([...str,i])
        }
    }
    return dfs([])
};
console.log(getPermutation(3, 3))