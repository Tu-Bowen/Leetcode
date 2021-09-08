/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let row=board.length,col=board[0].length,mark=[]
    for(let i=0;i<row;i++){
        mark[i]=[]
        for(let j=0;j<col;j++){
            mark[i].push(false)
        }
    }
    let dfs=function(k,i,j){
        if(board[i][j]!=word[k]){
            return false
        }else if(k==word.length-1){
            return true
        }
        mark[i][j]=true;
        let point=[{x:0,y:1},{x:0,y:-1},{x:1,y:0},{x:-1,y:0}]
        for(let p=0;p<point.length;p++){
            let newi=i+point[p].x,newj=j+point[p].y;
            if(newi>-1&&newj>-1&&newi<row&&newj<col&&!mark[newi][newj]){
                let flag=dfs(k+1,newi,newj);
                if(flag){
                    return true
                }
            }
        }
        mark[i][j]=false
        return false
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(dfs(0,i,j)){
                return true
            }
        }
    }
    return false
};


const board=[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
//const words=["oath","pea","eat","rain"]
const words="eat"
console.log(exist(board,words))


var exist_ = function(board, word) {
    const h = board.length, w = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const visited = new Array(h);
    for (let i = 0; i < visited.length; ++i) {
        visited[i] = new Array(w).fill(false);
    }
    const check = (i, j, s, k) => {
        if (board[i][j] != s.charAt(k)) {
            return false;
        } else if (k == s.length - 1) {
            return true;
        }
        visited[i][j] = true;
        let result = false;
        for (const [dx, dy] of directions) {
            let newi = i + dx, newj = j + dy;
            if (newi >= 0 && newi < h && newj >= 0 && newj < w) {
                if (!visited[newi][newj]) {
                    const flag = check(newi, newj, s, k + 1);
                    if (flag) {
                        result = true;
                        break;
                    }
                }
            }
        }
        visited[i][j] = false;
        return result;
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const flag = check(i, j, word, 0);
            if (flag) {
                return true;
            }
        }
    }
    return false;
};

//console.log(exist_(board,words))