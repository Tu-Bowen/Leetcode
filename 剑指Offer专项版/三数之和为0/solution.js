/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function (nums) {
    let ans = []
    nums.sort((a, b) => a - b)
    if (nums.length < 3) return []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>0)break
        if(i!==0&&nums[i]===nums[i-1])continue
        let l = i + 1, r = nums.length - 1
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            if (sum === 0){
                ans.push([nums[i], nums[l], nums[r]])
                while(nums[l]===nums[l+1])l++
                while(nums[r]===nums[r-1])r--
                r--
                l++
            }
            else if (sum < 0)
                l++
            else
                r--
        }
    }
    return ans
};