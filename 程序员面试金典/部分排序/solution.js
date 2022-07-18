/**
 * @param {number[]} array
 * @return {number[]}
 */
 var subSort = function(array) {
    let l=-1,r=-1,max=Number.MIN_SAFE_INTEGER,min=Number.MAX_SAFE_INTEGER; 
    for(let i=0;i<array.length;i++){
        if(array[i]>=max){
            max=array[i]
        }else{
            r=i
        }
    }
    for(let i=array.length-1;i>=0;i--){
        if(array[i]<=min){
            min = array[i]
        }else{
            l=i
        }
    }
    return [l,r]
};