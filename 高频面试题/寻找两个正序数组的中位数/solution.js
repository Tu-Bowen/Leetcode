/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let n1=nums1.length,n2=nums2.length,n=n1+n2
    function getK(k){
        let index1=0,index2=0
        while(true){
            if(index1===nums1.length){
                return nums2[index2+k-1]
            }
            if(index2===nums2.length){
                return nums1[index1+k-1]
            }
            if(k===1){
                return Math.min(nums1[index1],nums2[index2])
            }
            let half=Math.floor(k/2)
            let newIndex1=Math.min(index1+half,nums1.length)-1
            let newIndex2=Math.min(index2+half,nums2.length)-1
            let provid1=nums1[newIndex1]
            let provid2=nums2[newIndex2]
            if(provid1<=provid2){
               k=k-(newIndex1-index1+1)
               index1=newIndex1+1
            }else{
               k=k-(newIndex2-index2+1)
               index2=newIndex2+1
            }
        }        
    }
    if(n%2===1){
        let midIndex=Math.floor(n/2)
        return getK(midIndex+1)
    }else{
        let midIndex1=Math.floor(n/2)-1,midIndex2=Math.floor(n/2)
        return (getK(midIndex1+1)+getK(midIndex2+1))/2
    }
};
console.log(findMedianSortedArrays([1,3],[2]))