/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let ans=[],n=intervals.length
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })
    intervals.reduce(function(pre,curV,curI){
        let res=new Array(2)
        if(pre[1]>=curV[0]){
            res[0]=pre[0]
            res[1]=Math.max(pre[1],curV[1])
        }else{
            res=curV
            ans.push(pre)
        }
        if(curI===n-1){
            ans.push(res)
        }
        return res
    })
    return ans
};
console.log(merge([[1,4],[4,5]]))