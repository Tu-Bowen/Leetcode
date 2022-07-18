/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [], n = candidates.length, visited = new Array(n).fill(false)
    candidates.sort((a, b) => a - b)
    function back(arr, sum,start) {
        if (sum > target) return
        if (sum === target) {
            res.push(arr)
            return
        }
        for (let i = start; i < n; i++) {
            if (visited[i]) continue
            if (i !== 0 && candidates[i] === candidates[i - 1]&&!visited[i-1]) continue
            visited[i] = true
            back([...arr, candidates[i]], sum + candidates[i],i+1)
            visited[i] = false
        }
    }
    back([],0,0)
    // for (let i = 0; i < n; i++) {
    //     if (i !== 0 && candidates[i] !== candidates[i - 1]) {
    //         visited[i] = true
    //         back([candidates[i]], visited[i])
    //     }
    // }
    return res
};
console.log(combinationSum2([10,1,2,7,6,1,5],8))