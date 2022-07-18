/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length, left=0,right=n-1,leftMax=0,rightMax=0,res=0
    while(left<right){
        leftMax=Math.max(height[left],leftMax)
        rightMax=Math.max(height[right],rightMax)
        if(height[left]<height[right]){
            res=res+(leftMax-height[left])
            left++
        }else{
            res=res+(rightMax-height[right])
            right--;
        }
    }
    return res
};