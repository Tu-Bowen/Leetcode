/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    var res = []
    var dfs = (idx, cur, sum) => {
        if (sum >= target || idx >= candidates.length) {
            if (sum == target) {
                res.push(cur)
            }
            return
        }
        dfs(idx + 1, [...cur], sum)
        while (sum < target) {
            sum=sum+candidates[idx]
            cur.push(candidates[idx])
            //cur = [...cur,candidates[idx]];
            dfs(idx+1,[...cur],sum)
        }
    }
    dfs(0,[],0)
    return res
};

console.log(combinationSum([2, 3, 6, 7], 7))