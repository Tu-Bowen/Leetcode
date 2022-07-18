/**
 * @param {number[][]} land
 * @return {number[]}
 */
 var pondSizes = function (land) {
    const row = land.length;
    let ans = []
    if (row == 0) return []
    const col = land[0].length
    let area = 0
    var dfs=(i,j)=>{
        if(i<0||j<0||i>row-1||j>col-1||land[i][j]!=0)return
        land[i][j]=1
        area++
        dfs(i-1,j)
        dfs(i,j-1)
        dfs(i+1,j)
        dfs(i,j+1)
        dfs(i-1,j+1)
        dfs(i+1,j-1)
        dfs(i-1,j-1)
        dfs(i+1,j+1)
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            area = 0
            dfs(i,j)
            if(area!=0)
            ans.push(area)
        }
    }
    return ans.sort((a,b)=>a-b)
};
let a = [
    [0, 2, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1]
]
console.log(pondSizes(a))