/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
    let n = nums.length, odd = new Array(n + 1).fill(0), even = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        if(i%2==0){
            odd[i]=odd[i-1]+nums[i-1]
            even[i]=even[i-1]
        }else{
            odd[i]=odd[i-1]
            even[i]=even[i-1]+nums[i-1]
        }
    }
    console.log(odd)
    console.log(even)
    let res=0
    for(let i=0;i<n;i++){
        let  o = odd[i]+even[n]-even[i+1]
        let  e = even[i]+odd[n]-odd[i+1]
        if(o===e){
            res++
        }
    }
    return res
};

waysToMakeFair([2,1,6,4])