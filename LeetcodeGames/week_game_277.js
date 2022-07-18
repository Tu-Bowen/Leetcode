/**
 * 元素计数
 * @param {number[]} nums
 * @return {number}
 */
var rearrangeArray = function (nums) {
    if(nums.length===0)return nums
    let odd = [], even = []
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]>0){
            odd.push(nums[i])
        }else{
            even.push(nums[i])
        }
    }
    let i=0,j=0,res=[],flag=true
    while(i!==odd.length||j!==even.length){
        let num=flag?odd[i++]:even[j++]
        res.push(num)
        flag=!flag
    }
    return res
};
/**
 * 按符号重排数组
 * @param {number[]} nums
 * @return {number}
 */
 var countElements = function(nums) {
    let min=Math.min(...nums),max=Math.max(...nums),res=0 
    for(let i=0;i<nums.length;i++){
        if(min<nums[i]&&nums[i]<max){
            res++
        }
     }
     return res
};
/**
 * 找出数组中华所有孤独数字
 * @param {number[]} nums
 * @return {number[]}
 */
 var findLonely = function(nums) {
     nums.sort((a,b)=>{
         return a-b
     })
     let res=[]
     if(Math.abs(nums[0]-nums[1])>1){
         res.push(nums[0])
     }
     if(Math.abs(nums[nums.length-1]-nums[nums.length-2])>1){
         res.push(nums[nums.length-1])
     }
     for(let i=1;i<nums.length-1;i++){
         if(Math.abs(nums[i+1]-nums[i])>1&&Math.abs(nums[i]-nums[i-1])>1){
             res.push(nums[i])
         }
     }
     return res
};
/**
 * 基于陈述统计最多好人数
 * @param {number[][]} statements
 * @return {number}
 */
 var maximumGood = function(statements) {

};