/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function (nums, k) {
    let ans = 0
    let m = new Map()
    m.set(0,1)
    let sum=0
    for (let i = 0; i < nums.length; i++) {
        sum=sum+nums[i]
        if(m.has(sum-k)){
            ans=ans+m.get(sum-k)
        }
        m.set(sum,m.has(sum)?m.get(sum)+1:1)
    }
    return ans
};