/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var sum = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
    }
    return res;
}
var minSubArrayLen_baoli = function (target, nums) {
    let n = nums.length

    if (n == 1) {
        if (nums[0] == target) return 1
        else return 0
    }

    if(nums.includes(target))return 1

    let thesum = sum(nums)

    if (thesum < target) return 0

    if (thesum == target) return n

    let r = 0, res = n;

    for (let l = 0; l < n; l++) {
        let sonsum = 0;
        r=l;
        while (r < n && sonsum < target) {

            sonsum += nums[r];
            //console.log(l,r,sonsum)
            if (sonsum >= target) {
                res = Math.min(res, r - l + 1)
                break
            }
            r++;
        }
    }
    return res
};



/**滑动窗口-最优解 */
var minSubArrayLen = function (target, nums) {
    const n=nums.length
    let s=0,e=0,sum=0,res=10001
    while(e<n){
        sum+=nums[e]
        while(s<=e&&sum>=target){
            if(sum>=target)//先计算长度，否则在左指针移动完成之后计算长度就会造成移动前情况的遗漏
            res=Math.min(res,e-s+1)
            sum-=nums[s]
            s++
            console.log(s,e)
        }
        e++
    }
    return res==10001?0:res
};
console.log(minSubArrayLen(15,[1,2,3,4,5]))