/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var quicksort=(arr)=>{
     let n=arr.length
     let parn = (low,high)=>{
         let mark = arr[low]
         while(low<high){
             while(low<high&&arr[high]>=mark){
                 high--
             }
             arr[low]=arr[high]
             while(low<high&&arr[low]<=mark){
                 low++
             }
             arr[high]=arr[low]
         }
         arr[low]=mark
         return low
     }
     let qsort=(start,end)=>{
         if(start>=end)return
         let _parn=parn(start,end)
         qsort(start,_parn)
         qsort(_parn+1,end)
     }
  qsort(0,n-1)
  //console.log(arr)   
}
/**
 * 
 * @param {Array} arr 
 * @param {Number} k 
 * @returns 
 */
var getLeastNumbers = function(arr, k) {
     quicksort(arr)
     //console.log(arr)
     return arr.splice(0,k)
};
console.log(getLeastNumbers([1,2,5,3,45,8,14324,23],2))