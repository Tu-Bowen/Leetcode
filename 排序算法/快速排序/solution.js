/**
 * 
 * @param {Array} list 
 */
var quick_sort=(list)=>{
    let partition = (low,high)=>{
        let provit=list[low]
        while(low<high){
            while(low<high&&list[high]>=provit){
                high--
            }
            list[low]=list[high]
            while(low<high&&provit>=list[low]){
                low++
            }
            list[high]=list[low]
        }
        list[low]=provit
        return low;
    }
    let qSort=(start,end)=>{
        if(start>=end)return
        let mid = partition(start,end)
        qSort(start,mid-1)
        qSort(mid+1,end)
    }
    qSort(0,list.length-1)
    console.log(list)
}



let b = [100, 2, 8, 6, 9, 7, 2, 34, 7, 8, 23, 4, 9, 8]
quick_sort(b)






let a=[1, 3, 4, 5, 2, 6, 9, 7, 8, 0]
quick_sort(a)


  
  