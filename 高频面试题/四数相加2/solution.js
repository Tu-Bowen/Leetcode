/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
     let count12=new Map(),res=0
     nums1.forEach(u=>{
         nums2.forEach(v=>{
             count12.set(u+v,count12.get(u+v)+1||1)
         })
     })
     for(let i=0;i<nums3.length;i++){
         for(let j=0;j<nums4.length;j++){
             if(count12.has(-nums3[i]-nums4[j])){
                 res+=count12(-nums3[i]-nums4[j])
             }
         }
     }
     return res
};