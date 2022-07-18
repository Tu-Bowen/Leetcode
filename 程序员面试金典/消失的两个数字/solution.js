/**
 * @param {number[]} nums
 * @return {number[]}
 */
var _missingTwo = function (nums) {
    let sum = 0, n = nums.length + 2
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    let sumTwo = (n + 1) * n / 2 - sum, lims = Math.floor(sumTwo / 2)
    sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= lims) {
            sum += nums[i]
        }
    }
    let one = (lims + 1) * lims / 2 - sum
    return [one, sumTwo - one]
};


var missingTwo = (nums) => {
    let n = nums.length,ans=[]
    nums.push(-1)
    nums.push(-1)
    nums.push(-1)
    for (let i = 0; i < n; i++) {
        while (nums[i] != i&&nums[i]!=-1) {
            let t = nums[i]
            nums[i] = nums[t]
            nums[t] = t
        }
    }
    for(let i=1;i<nums.length;i++){
        if(nums[i]!=-1){
            ans.push(i)
        }
    }
    return ans
}

missingTwo([2,3])