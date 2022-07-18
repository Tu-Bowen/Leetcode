/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0,r=height.length-1,res=0
    if(height.length===1)return height[1]-height[0];
    while(l<r){
        let lh=height[l],rh=height[r]
        let c=(r-l)*Math.min(lh,rh)
        if(c>res)res=c
        if(lh<rh){
            l++
            while(l<r&&height[l]<lh)l++
        }else{
            r--
            while(l<r&&height[r]<rh)r--
        }
    }
    return res
};