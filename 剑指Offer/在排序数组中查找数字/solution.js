/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    if(nums.length===0)return 0
    if(nums.length===1)return nums[0]===target
    function biaSearch(flag){
        let left=0,right=nums.length-1,ans=nums.length
        while(left<=right){
           let mid=Math.floor((right+left)/2)
            if(nums[mid]>target||(flag&&nums[mid]>=target)){
                right=mid-1
                ans=mid
            }else{
                left=mid+1
            }
        }
        return ans
    }
    let lidx=biaSearch(true)
    let ridx=biaSearch(false)-1
    let res=0
    
    if(ridx<nums.length&&lidx>-1&&lidx<=ridx&&nums[lidx]===target&&nums[ridx]===target){
        res=ridx-lidx+1
    }
    // console.log(lidx,ridx)
    return res

};
search([2,2],2)