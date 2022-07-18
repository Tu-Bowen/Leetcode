/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ans=0
    for (let i = 0; i < 32; i++) {
        let totle=0
        nums.forEach((item) => {
            totle=totle+((item>>i)&1)
        })
        if(totle%3!==0){
            ans=ans|(1<<i)
        }
    }
    return ans
};
singleNumber([2, 2, 3, 2])
