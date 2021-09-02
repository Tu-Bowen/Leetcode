/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
     let l=0,r=height.length-1;
     if(r-l==1){
         return Math.min(height[0],height[1]);
     }
     let res=0;
     while(l<r){
        const lh=height[l],rh=height[r];
        let contain=(r-l)*Math.min(lh,rh);
         if(res<contain)res=contain;
         if(lh<rh){
             l++;
             while(l<r&&height[l]<lh){l++;}
         }else{
             r--;
             while(l<r&&height[r]<rh){r--;}
         }
     }
     console.log(res)
     return res;

};


maxArea([4,3,2,1,4]);