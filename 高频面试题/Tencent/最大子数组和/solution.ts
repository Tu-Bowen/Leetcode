function maxSubArray(nums: number[]): number {
    let n: number = nums.length, pre: number = 0, cur: number = 0, res: number=-1000001
    for (let i = 0; i < n; i++) {
        if (pre < 0) pre = 0
        cur = pre + nums[i]
        pre = cur
        if (res < cur)
            res = cur
    }
    return res
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))