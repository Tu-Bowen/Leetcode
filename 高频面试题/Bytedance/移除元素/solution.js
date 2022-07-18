/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let len = 0,lenght=nums.length
    for (let i = 0; i < length; i++) {
        if (nums[i] === val){
            nums.splice(i, 1)
            i--
        }
        else
            len++
    }
    return len
};