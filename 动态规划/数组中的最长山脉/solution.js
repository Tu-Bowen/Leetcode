/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
    let n = arr.length,res=0
    if(n<3)return 0
    for (let i = 1; i < n-1; i++) {
        let left=i-1,right=i+1
        if(arr[left]>=arr[i]||arr[right]>=arr[i])continue;
        while(left>0&&arr[left]>arr[left-1])left--
        while(right<n-1&&arr[right]>arr[right+1])right++
        res=Math.max(res,right-left+1)
    }
    return res
};
longestMountain([0,1,2,3,4,5,6,7,8,9])