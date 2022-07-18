/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
     const row = image.length,col = image[0].length
     let res = []
     for(let i=0;i<row;i++){
         res.push([...image[i]])
     }

     let dfs = (cr,cc)=>{
        if(res[cr][cc]===newColor)return
        res[cr][cc]=newColor
         if(0<=cc-1&&image[cr][cc-1] === image[sr][sc]){
             dfs(cr,cc-1)
         }
         if(cc+1<col&&image[cr][cc+1] === image[sr][sc]){
             dfs(cr,cc+1)
         }
         if(0<=cr-1&&image[cr-1][cc] === image[sr][sc]){
             dfs(cr-1,cc)
         }
         if(cr+1<row&&image[cr+1][cc] === image[sr][sc]){
             dfs(cr+1,cc)
         }

     }
     dfs(sr,sc)
     return res
};
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2))