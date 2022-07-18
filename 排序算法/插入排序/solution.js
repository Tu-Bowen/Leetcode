/**
 * 
 * @param {Array} arr 
 * 插入排序，每次将外层循环的一个值插入到它正确的位置，内部循环是在寻找正确位置
 */
var charu_sort=(arr)=>{
    let n= arr.length
    for(let i=0;i<n;i++){
        let j=i,tmp=arr[i]
        for(;j>0&&arr[j-1]>tmp;j--){
            arr[j]=arr[j-1]
        }
        arr[j]=tmp
    }
    console.log(arr)
}

charu_sort([98,77,6,986,56])