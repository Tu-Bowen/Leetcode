function threeSumClosest(nums: number[], target: number): number {
    let cha:number=2222,res:number
    nums.sort((a,b)=>a-b)
    // console.log(nums)
    for(let i:number=0;i<nums.length-2;i++){
        let l:number=i+1,r:number=nums.length-1,_target=target-nums[i]
        // console.log("%",_target,target,nums[i],i,nums.length-2)
        while(l<r){
            let sum=nums[l]+nums[r]
            if(sum===_target){
                return target
            }else if(sum<_target){
                l++
            }else{
                r--
            }
            if(Math.abs(sum-_target)<cha){
                // console.log(sum,_target,cha)
                cha=Math.abs(sum-_target)
                res=sum+nums[i]
            }
        }
    }
    return res
};
console.log(threeSumClosest([-1,2,1,-4],1))