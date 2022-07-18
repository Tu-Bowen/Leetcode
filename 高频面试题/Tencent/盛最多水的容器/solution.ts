function maxArea(height: number[]): number {
   let left:number=0,right:number=height.length,result:number=0
   while(left<right){
       let h=Math.min(height[left],height[right])
       let w=right-left
       if(w*h>result){
           result=w*h
        //    console.log(w,h,left,right)
        }
       if(h===height[left]){
           left++
       }else{
           right--
       }
   }
   return result
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))