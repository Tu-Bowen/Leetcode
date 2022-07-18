/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
     let s=new Set(nums),res=1
     for(n of s){
        if(!s.has(n-1)){
            let curLen=1
            let curNum=n
            while(s.has(curNum+1)){
                curLen++
                curNum++
            }
            res=Math.max(res,curLen)
        }
     }
     return res
};
console.log(longestConsecutive([100,4,200,1,3,2]))