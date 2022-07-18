/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === "0" || num2 === "0") return 0
    let m=num1.length,n=num2.length,nums=new Array(m+n).fill(0)
    for(let i=num1.length-1;i>=0;i--){
        let x=num1[i].charAt()
        for(let j=num2.length-1;j>=0;j--){
            let y=num2[j].charAt()
            nums[i+j+1]+=x*y
        }
    }
    let res=""
    for(let i=n+m-1;i>0;i--){
        nums[i-1]=nums[i-1]+Math.floor(nums[i]/10)
        nums[i]=nums[i]%10
    }
    if(nums[0]===0){
        nums.shift()
    }
    for(let i=0;i<nums.length;i++){
        res=res+nums[i]
    }
    return res
};
console.log(multiply("15", "223"))