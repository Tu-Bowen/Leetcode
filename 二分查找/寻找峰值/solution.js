/** 
 * @param {Array} nums 
 * @param {number} idx 
 * @returns 
 */
function get(nums,idx){
     if(idx<0||idx>nums.length-1){
         return [0,0]
     }
     return [1,nums[idx]]
}
/**
 * @param {Array} nums 
 * @param {number} idx1 
 * @param {number} idx2 
 */
function compare(nums,idx1,idx2) {
    let a=get(nums,idx1)
    let b=get(nums,idx2)
    if(a[0]!==b[0]){
        return a[0]>b[0]?1:-1
    }
    if(a[1]===b[1])return 0
    return a[1]>b[1]?1:-1
}
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
     let l=0,r=nums.length-1,ans=-1
     while(l<=r){
         let mid=Math.floor((r+l)/2)
         if(0<compare(nums,mid,mid-1)&&compare(nums,mid,mid+1)>0){
            console.log(mid) 
            return mid
        }
         if(compare(nums,mid,mid+1)<0){
             l=mid+1
         }else{
             r=mid-1
         }
     }
}; 
findPeakElement([1,2,3,1])