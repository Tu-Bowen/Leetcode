/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
    let n = a.length, lpre = new Array(n),ans=new Array(n)
    lpre[0] = a[0]
    for (let i = 1; i < n; i++) {
        lpre[i]=lpre[i-1]*a[i]
    }
    let r=a[n-1]
    ans[n-1]=lpre[n-2]
    for(let i=n-2;i>0;i--){
        ans[i]=lpre[i-1]*r
        r=r*a[i]
    }
    ans[0]=r
    return ans
};
console.log(constructArr([1,2,3,4,5]))