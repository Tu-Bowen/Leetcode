# 长度最小的子数组

力扣：
https://leetcode-cn.com/problems/minimum-size-subarray-sum/

我使用的是暴力解法

最好的思路是**滑动窗口**

```
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
```
