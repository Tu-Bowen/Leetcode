/**
 * @param {number[]} nums
 * @return {number}
 */
let quicksort=(arr)=>{
    let f_mid=function (low,high){
        let p=arr[low]
        while(low<high){
            while(low<high&&arr[high]>=p){
                high--
            }
            arr[low]=arr[high]
            while(low<high&&arr[low]<=p){
                low++
            }
            arr[high]=arr[low]
        }
        arr[low]=p
        return low
    }
    let qs=function (start,end){
        if(start>=end)return
        let mid=f_mid(start,end)
        qs(start,mid-1)
        qs(mid+1,end)
    }
    qs(0,arr.length-1)
}
 var majorityElement = function(nums) {
     quicksort(nums)
     return nums[Math.floor(nums.length/2)]
}; 
console.log(reversePairs([1,2,3,2,2,2,5,4,2]))