/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    const len = nums.length,mark=new Array(len),res=new Array();
    for(let i=0;i<len;i++){
        mark[i]=false;
    }
    nums.sort()
    const digui=(index,arr)=>{
        mark[index]=true;
        arr.push(nums[index]);
        let last = -1;
        for(let i=0;i<len;i++){
            if(!mark[i]&&(last==-1||nums[last]!=nums[i])){
                last=i;
                digui(i,arr);
            }
        }
        if(arr.length==len){
            res.push(arr.concat())
        }
        arr.splice(arr.length-1,1);
        mark[index]=false;
    }
    for(let i=0;i<len;i++){
        if(i==0||(i!=0&&nums[i]!=nums[i-1])){
           mark[i]=true;
           digui(i,[]);
           mark[i]=false;
        }
    }
    return res;
};