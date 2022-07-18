/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let row = board.length, col = board[0].length
    var dfs = function (ri, ci, k) {
        if (ri < 0 || ci < 0 || ri === row || ci === col || board[i][j] !== word[k]) return false
        if (k === word.length - 1) return true
        board[ri][ci] = '#'
        let res = dfs(ri + 1, ci, k + 1) || dfs(ri, ci + 1, k + 1) || dfs(ri - 1, ci, k + 1) || dfs(ri, ci - 1, k + 1)
        board[ri][ci] = word[k]
        return res
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if(dfs(i,j,0))return treu
        }
    }
    return false
};
