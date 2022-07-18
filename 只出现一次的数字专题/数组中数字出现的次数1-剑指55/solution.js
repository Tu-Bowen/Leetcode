//分组异或
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function (nums) {
    let n = nums.length
    let ret = 0
    for (let i = 0; i < n; i++) {
        ret = ret ^ nums[i]
    }
    let p = 1
    while ((p & ret) === 0) {
        p <<= 1
    }
    let a = 0, b = 0
    for (let i = 0; i < n; i++) {
        if ((nums[i] & p )!== 0) {
            a = a ^ nums[i]
        } else{
            b = b ^ nums[i]
        }
    }
    // console.log(a,b)
    return [a, b]
}