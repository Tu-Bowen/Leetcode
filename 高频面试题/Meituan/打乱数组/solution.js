/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums
    this.origin = [...nums]
};
/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return [...this.origin]
};
/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    for (let i = 0; i < this.nums.length; i++) {
        let j = Math.floor(Math.random() * this.nums.length - i) + i
        let temp = this.nums[i]
        this.nums[i] = this.nums[j]
        this.nums[j] = temp
    }
    return this.nums
};
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
