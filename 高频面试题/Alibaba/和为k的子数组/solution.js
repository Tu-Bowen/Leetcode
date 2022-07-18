/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let ans = 0, pre = new Array(nums.length).fill(0), m = new Map()
    m.set(0,1)
    for (let i = 0; i < nums.length; i++) {
        if(i==0)pre[i]=nums[i]
        else pre[i] = pre[i - 1]+nums[i]
        if(m.has(pre[i]-k)){
            ans+=m.get(pre[i]-k)
        }
        m.set(pre[i], m.has(pre[i]) ? m.get(pre[i])+1 : 1)
    }
    return ans
};
console.log(subarraySum([1,-1,0], 0))