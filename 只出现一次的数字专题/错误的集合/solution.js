/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let n = nums.length,m = new Map()
    for (let i = 0; i < n; i++) {
        m.set(nums[i],(m.get(nums[i]) || 0) + 1)
    }
    let a,b
    for (let i = 1; i <= n; i++) {
        if(m.get(i)>1){
            a=i
        }else if(!m.has(i)){
            b=i
        }
    }
    return [a,b]
};