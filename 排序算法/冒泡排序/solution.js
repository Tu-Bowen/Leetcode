/**
 * 
 * @param {Array} arr
 * 冒泡排序，外层循环是当前位置，内层循环是为了把当前位置的最大值给相邻比对冒泡上来 
 */
var maopao_sort = (arr) => {
    let n = arr.length,flag=false
    for (let i = n - 1; i >= 0; i--) {
        flag=false
        for (let j = 0; j < i; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                flag=true
            }
        }
        if(!flag)break;
    }
    console.log(arr)
}

maopao_sort([123,31234,355,154])