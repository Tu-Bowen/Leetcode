/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
 var findClosestElements = function(arr, k, x) {
    let l=0,r=arr.length-k-1
    while(l<=r){
        let mid=l+Math.floor((r-l)/2)
        if(x-arr[mid]>arr[mid+k]-x){
            l=mid+1
        }else{
            r=mid-1
        }
    }
    let res=new Array(k)
    for(let i=0;i<k;i++,l++){
        res[i]=arr[l]
    }
    return res
};