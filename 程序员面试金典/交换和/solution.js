/**
 * @param {number[]} array1
 * @param {number[]} array2
 * @return {number[]}
 */
 var findSwapValues = function(array1, array2) {
     let sum1=0,sum2=0,s=new Set(array2)
     for(let i=0;i<array1.length;i++){
         sum1+=array1[i]
     }
     for(let i=0;i<array2.length;i++){
         sum2+=array2[i]
     }
     const cha=sum1-sum2
     if(cha%2!=0)return[]
     const char_2=cha/2
     for(let i=0;i<array1.length;i++){
         if(s.has(array1[i]-char_2)){
             return [array1[i],array1[i]-char_2] 
         }
     }
     return []
};
console.log((-2)%2!=0)