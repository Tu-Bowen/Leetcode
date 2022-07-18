/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var exchange = function (nums) {
    var swap = function (a, b) {
        let t = nums[a]
        nums[a] = nums[b]
        nums[b] = t
    }
    let i = 0, j = nums.length - 1
    while (i < j) {
        //console.log(nums)
        while(i<j&&((nums[i] % 2) === 1)) i++
        while(i<j&&((nums[j] % 2) === 0)) j--
        swap(i,j)
    }
    return nums
};
exchange([1,2,3,4])