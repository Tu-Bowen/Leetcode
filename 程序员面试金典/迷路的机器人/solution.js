/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
 var pathWithObstacles = function(obstacleGrid) {
     if(obstacleGrid[0][0] === 1)return []
     let row = obstacleGrid.length,col = obstacleGrid[0].length,res = [] 
    let dfs = (r,c,arr)=>{
        arr.push([r,c])
        obstacleGrid[r][c]=1//由于超时而做的优化，标记当前节点已经被搜索过
        if(r===row-1&&c===col-1){
            res=arr
            return
        }
        if(r+1<row&&obstacleGrid[r+1][c] === 0){
            dfs(r+1,c,[...arr])
        }
        if(c+1<col&&obstacleGrid[r][c+1] === 0){
            dfs(r,c+1,[...arr])
        }
    }
    dfs(0,0,[])
    return res
};
let a = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]
console.log(pathWithObstacles(a))