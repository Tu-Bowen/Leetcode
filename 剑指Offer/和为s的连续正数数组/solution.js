/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
    let res = []
    function recur(num, target, arr) {
        if (target === 0) {
            res.push(arr)
        }
        if(target<0){
            return
        }
        let next=num+1
        recur(next,target-next,[...arr,next])
    }
    for (let i = 1; i < target; i++) {
        recur(i,target-i,[i])
    }
    return res
};
console.log(findContinuousSequence(9))