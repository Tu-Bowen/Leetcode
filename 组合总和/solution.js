/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [], arr = [], n = candidates.length;
    const dfs=(index,_target)=>{
        //console.log(_target,arr)
        if(_target==0){
            res.push(arr.concat())//
            return
        }
        if(index==n){
            return//
        }
        //不加上当前index元素
        dfs(index+1,_target);
        //加上当前元素
        if(_target-candidates[index]>=0){
            arr.push(candidates[index])
            dfs(index,_target-candidates[index]);//
            arr.pop()
        }
    }
    dfs(0,target)
    //console.log(res)
    return res
};
combinationSum([2,3,6,7],7)