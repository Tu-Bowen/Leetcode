/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
     let res=[];
     if(matrix.length==0){
         return matrix;
     }
     let row=matrix.length,col=matrix[0].length,len=row*col,visited=[];
     for(let k=0;k<row;k++){
         visited[k]=[];
         for(let m=0;m<col;m++){
             visited[k].push(0);
         }
     }
     const point=[
         {i:0,j:1},
         {i:1,j:0},
         {i:0,j:-1},
         {i:-1,j:0}
     ]
     let i=0,j=0,curIndex=0;
     for(let o=0;o<len;o++){
         res.push(matrix[i][j]);
         visited[i][j]=1;
         let newi=i+point[curIndex].i,newj=j+point[curIndex].j;
         if(newi<0||newi>row-1||newj<0||newj>col-1||visited[newi][newj]==1){
             curIndex=(curIndex+1)%4;
             newi=i+point[curIndex].i;
             newj=j+point[curIndex].j;
         }
         i=newi;
         j=newj;
     }
     return res;
};

const arr=[[2,3]];
console.log(spiralOrder(arr));