/**
 * @param {number[]} height
 * @param {number[]} weight
 * @return {number}
 */
 var bestSeqAtIndex = function(height, weight) {
     let data=[],dp=[],len=0
     for(let i=0;i<height.length;i++){
         let item={
             h:height[i],
             w:weight[i]
         } 
         data.push(item)
     }
     //
     data.sort((a,b)=>{
         if(a.h==b.h){
             return b.w-a.w
         }

         return a.h-b.h
     })
     //console.log(data)
     for(let i=0;i<data.length;i++){
         let l=0,r=len,weight=data[i].w
         while(l<r){
             const m=Math.floor((l+r)/2)
             if(dp[m]<weight){
                 l=m+1
             }else{
                 r=m
             }
         }
         if(r==len){
             len++
         }
         dp[r]=weight//
     }
    //  console.log(dp)
    //  console.log(len)
     return len
};
let height = [65,70,56,75,60,68],weight = [100,150,90,190,95,110]
height=[2868,5485,1356,1306,6017,8941,7535,4941,6331,6181]
weight=[5042,3995,7985,1651,5991,7036,9391,428,7561,8594]
bestSeqAtIndex(height,weight)