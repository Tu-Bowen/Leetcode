function fourSum(nums: number[], target: number): number[][] {
    let res:number[][]=[]
    nums.sort((a:number,b:number):number=>a-b)
    for(let i:number=0;i<nums.length-3;i++){
        if(i>0&&nums[i]===nums[i-1])continue
        for(let j:number=i+1;j<nums.length-2;j++){
            if(j>i+1&&nums[j]===nums[j-1])continue
            console.log(i,j)
            let left:number=j+1,right:number=nums.length-1
            while(left<right){
                let sum:number=nums[i]+nums[j]+nums[left]+nums[right]
                if(sum===target){
                    let temp:number[]=[nums[i],nums[j],nums[left],nums[right]]
                    res.push(temp)
                    while(left+1<right&&nums[left]===nums[left+1])left++
                    left++
                    while(left<right-1&&nums[right]===nums[right-1])right--
                    right--
                }else if(sum<target){
                    while(left+1<right&&nums[left]===nums[left+1])left++
                    left++
                }else{
                    while(left<right-1&&nums[right]===nums[right-1])right--
                    right--;
                }

            }
        }
    }
    return res
};


let a:number[]=[1,0,-1,0,-2,2]//-1,-2,0,0,1,2
let target:number=0
console.log(fourSum(a,target))