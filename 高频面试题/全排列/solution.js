/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
     let res=[],m=new Array(nums.length).fill(false)
    function digui(idx,tmp){
        if(idx===nums.length){
            res.push(tmp)
        }
        for(let i=0;i<nums.length;i++){
            if(!m[i]){
                m[i]=true
                digui(idx+1,[...tmp,nums[i]])
                m[i]=false
            }
        }
     }
     digui(0,[])
     return res
};