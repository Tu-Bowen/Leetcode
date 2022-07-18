/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    let n=numbers.length
    let low=0,high=n-1
    while(low<high){
        let mid=Math.floor(low+(high-low)/2)
        if(numbers[mid]<numbers[high]){
            high=mid
        }else if(numbers[mid]>numbers[high]){
            low=mid+1
        }else{
            high=high-1
        }
    }
    return numbers[high]
};