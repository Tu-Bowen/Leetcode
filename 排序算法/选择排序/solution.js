/**
 * 
 * @param {Array} arr 
 * 选择后面未排序中最小的放到目标位置，与冒泡的不同在于不是相邻的交换
 */
var xuanze_sort = (arr) => {
    var n = arr.length
    for (let i = 0; i < n; i++) {
        let minIndex=i,min=arr[i]
        for (let j = i+1; j < n; j++) {
            if(arr[j]<min){
                minIndex=j
                min=arr[j]
            }
        }
        if(minIndex!==i){
            arr[minIndex]=arr[i]
            arr[i]=min
        }
    }
    console.log(arr)
}
xuanze_sort([2131,3245,6363,12,4234])