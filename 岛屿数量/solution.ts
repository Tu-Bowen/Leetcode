function DFS(i: number, j: number, grid: string[][],mark:boolean[][]) : boolean{
    if(mark[i][j]) return false;
    mark[i][j]=true;
    let row = grid.length, col = grid[0].length;
    if (i < row - 1 && grid[i + 1][j] === "1") {
        DFS(i+1,j,grid,mark);
    } 
    if (j < col - 1 && grid[i][j + 1] === "1") {
        DFS(i,j+1,grid,mark);
    }
    if (i > 0 && grid[i - 1][j] === "1") {
        DFS(i-1,j,grid,mark);
    } 
    if (j >0 && grid[i][j - 1] === "1") {
        DFS(i,j-1,grid,mark);
    }
    return true;
}

function numIslands(grid: string[][]): number {
    
    let res:number=0;

    let r:number = grid.length;
    let c:number = grid[0].length;

    let mark:Array<Array<boolean>>= new Array(r)

    for(let i=0;i<r;i++){
        mark[i]=new Array(c)
    }

    for(let i=0;i<r;i++){
        for(let j=0;j<c;j++){
            if(grid[i][j]=="1"&&DFS(i,j,grid,mark)){
                //console.log(i,j)
                res++;
            }
        }
    }
    //console.log(res)
    return res;
}

let grid:Array<Array<string>> = [["1","1","1"],["0","1","0"],["1","1","1"]]


numIslands(grid);

