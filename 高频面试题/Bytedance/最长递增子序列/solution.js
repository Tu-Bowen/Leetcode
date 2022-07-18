/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
     let n=nums.length
     if(n==0)return 0 
     let len=1
     let d=new Array(n+1)
     d[len]=nums[0]
     for(let i=1;i<n;i++){
         if(nums[i]>d[len]){
             d[++len]=nums[i]
         }else{
             let l=1,r=len,pos=0
             while(l<=r){
                 let mid=Math.floor((r-l)/2)+l
                 if(d[mid]<nums[i]){
                     pos=mid
                     l=mid+1
                 }else{
                     r=mid-1
                 }
             }
             d[pos+1]=nums[i]
         }
     }
     return len
}; 