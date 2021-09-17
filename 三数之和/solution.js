/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var _threeSum = function (nums) {

    let res = [], arr = [];
    nums.sort((x,y)=>{
        return x-y
    });
    const dfs = (i, j, sum) => {
        if (arr.length == 3) {
            if (sum == 0) { res.push(arr.concat()); }
            return;
        }
        for (let u = i+1; u <= j; u++) {
            if(u>i+1&&nums[u]==nums[u-1])
            continue;
            arr.push(nums[u]);
            dfs(u, j, sum - nums[u]);
            arr.pop();
        }
    }

    for(let p=0;p<nums.length;p++){
        if(p>0&&nums[p]==nums[p-1])
        continue;
        arr.push(nums[p])
        dfs(p,nums.length-1,-nums[p])
        arr.pop()
    }
    //console.log(res)
    return res
};

var threeSum=(nums)=>{
    let res=[]
    nums.sort((x,y)=>{
        return x-y;
    })
    //console.log(nums)
    for(let first=0;first<nums.length;first++){
        if(first>0&&nums[first]==nums[first-1]){
            continue;
        }
        let target=-nums[first];
        for(let second=first+1;second<nums.length;second++){
            let third=nums.length-1;
            if(second>first+1&&nums[second]==nums[second-1]){
                continue;
            }
            while(third>second&&nums[third]>target-nums[second]){
                third--;
               
            }
            if(second==third){
                break;
            }/** */
            if(nums[second]+nums[third]==target){
                res.push([nums[first],nums[second],nums[third]])
            }
        }
    }
    return res
    //console.log(res)
}

threeSum([-1,0,1,2,-1,-4]);