/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var search = function(arr, target) {
    let n = arr.length 
    let left=0,right=n-1
    while(left<=right){
        if(arr[left] === target)return left;
        let mid = left + parseInt((right - left)/2) 
        //console.log(left+" "+right+" "+mid)
        if(arr[mid] === target){
            right = mid 
        } else if(arr[0]<arr[mid]){
            if(arr[0]<=target&&target<arr[mid]){
                right = mid-1
            }else{
                left = mid+1
            }
        } else if(arr[0]>arr[mid]){
            if(arr[mid]<target&&target<=arr[n-1]){
                left = mid + 1
            }else{
                right = mid-1
            }
        } else{
            //
            left+=1;
        }
    }
    return -1
};
var a= [18, 19, 22, 30, 31, 38, 38, 40, 43, 43, 45, 45, 46, 46, 48, 53, 56, 58, 62, 62, 62, 65, 71, 75, 77, 78, 81, -81, -75, -74, -74, -72, -70, -69, -69, -67, -60, -59, -56, -55, -54, -52, -52, -51, -51, -44, -41, -41, -39, -38, -34, -32, -32, -31, -31, -27, -26, -24, -24, -23, -22, -20, -18, -18, -18, -17, -16, -14, -11, -9, -8, -6, -5, -3, -1, 4, 10, 11, 11, 15, 16]
var b=53
console.log(a[0],a[39],a[19])
search(a,b)