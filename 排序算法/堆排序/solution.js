/**
 * 堆排序
 * @param {Array} list 
 */
var heap_sort = (list) => {
    let n = list.length
    var buildHeap = (parent,length) => {
        let child = 2 * parent + 1
        let number = list[parent]
        while (child < length) {
            if (child + 1 < length && list[child + 1] > list[child]) {
                child++
            }
            if (number >= list[child]) break;
            list[parent] = list[child]
            parent = child
            child = 2 * parent + 1
        }
        list[parent] = number
    }
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        buildHeap(i,n)
    }       
    for (let i = n - 1; i >= 0; i--) {
        let t=list[0]
        list[0]=list[i]
        list[i]=t
        buildHeap(0,i)
    }
    console.log(list)
}
let a=[1, 3, 4, 5, 2, 6, 9, 7, 8, 0]
heap_sort(a)



