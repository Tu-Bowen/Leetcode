/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
 var smallestDifference = function(a, b) {
    let alen = a.length,blen = b.length,i=j=0,ans = 2147483648
    a.sort((a,b)=>a-b)
    b.sort((a,b)=>a-b)
    while(i<alen&&j<blen){
        if(a[i]<b[j]){
            ans = Math.min(ans,b[j]-a[i])
            i++
        }else if(a[i]>b[j]){
            ans = Math.min(ans,a[i]-b[j])
            j++
        }else{
            return 0
        }
    }
    return ans
};
smallestDifference([1,3,15,11,2],[23,127,235,19,8])