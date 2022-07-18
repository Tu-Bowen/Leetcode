//着重整理一下思路
/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function (n) {
    let transformChessBoard = (chessBoard) => {
        let chessBoardBack = []
        chessBoard.forEach(row => {
            chessBoardBack.push(row.join(""))
        })
        return chessBoardBack
    }

    let chessboard = new Array()
    const results = []
    for (let i = 0; i < n; i++) {
        chessboard.push(new Array(n).fill('.'))
    }
    let isValid = (row,col) => {
        for(let i=0;i<row;i++){
            if(chessboard[i][col] === 'Q'){
                return false
            }
        }
        for(let i=row,j=col;i>=0&&j>=0;i--,j--){
            if(chessboard[i][j] === 'Q'){
                return false
            }
        }
        for(let i = row,j=col;i>=0&&j<n;i--,j++){
            if(chessboard[i][j] === 'Q'){
                return false
            }
        }
        return true
    }
    let backtracking = (row) => {
        if (row === n) {
            results.push(transformChessBoard(chessboard))
            return
        }
        for (let i = 0; i < n; i++) {
            if(isValid(row,i)){
                chessboard[row][i] = 'Q'
                backtracking(row + 1)
                chessboard[row][i] = '.'
            }
        }
    }
    backtracking(0)
    return results
};