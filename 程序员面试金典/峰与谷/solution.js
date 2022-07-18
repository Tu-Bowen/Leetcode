/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    let arr = [...nums.sort((a, b) => a - b)]
    const n = nums.length
    let l = 0,r =Math.floor(n / 2)
    for(let i=0;i<nums.length;i++) {
        let t
        if(i%2===0){
            t=arr[r]
            r++
        }else{
            t=arr[l]
            l++
        }
        nums[i]=t
    }
    return nums
};

wiggleSort([5, 3, 1, 2, 3])