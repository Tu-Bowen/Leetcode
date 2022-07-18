/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let ans = [],left=newInterval[0],right=newInterval[1],place=false
    for (let i = 0; i < intervals.length; i++) {
        if(right<intervals[i][0]){
            if(!place){
                ans.push([left,right])
                place=true
            }
            ans.push(intervals[i])
        }else if(left>intervals[i][1]){
            ans.push(intervals[i])
        }else{
            left=Math.min(left,intervals[i][0])
            right=Math.max(right,intervals[i][1])
        }
    }
    return ans
};