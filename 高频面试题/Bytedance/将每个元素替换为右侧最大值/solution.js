/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let last=arr[arr.length-1]
    arr[arr.length-1]=-1 
    for(let i=arr.length-2;i>=0;i++){
        let t=arr[i]
        arr[i]=last
        last=Math.max(last,t)
     }
     return arr
};