//统计32位每一位的1的个数
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function (nums) {
    let count = new Array(32).fill(0)
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        for (let j = 0; j < 32; j++) {
            count[j] = count[j] + (num & 1)
            num = (num >>> 1)
        }
    }
    let res=0
    for (let i = 31; i >= 0; i--) {
        res=res<<1
        res=res|(count[i]%3)
    }
    return res
};