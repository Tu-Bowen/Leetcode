/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
let n=nums.length,max=0;
if(n==1)return true
for(let i=0;i<n;i++){
	if(max>=i&&i+nums[i]>max){
		max=i+nums[i];
	}
}
//console.log(max)
return max>=n-1
};
canJump([2,3,1,1,4])