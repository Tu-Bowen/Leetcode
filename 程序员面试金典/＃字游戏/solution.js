/**
 * @param {string[]} board
 * @return {string}
 */
 var tictactoe = function (board) {
    let row = board.length, left = 0, right = 0, res = "Draw", pedding = false
    for (let i = 0; i < row; i++) {
        let hang = 0, zong = 0;
        for (let j = 0; j < row; j++) {
            hang += board[i].charCodeAt(j)
            zong += board[j].charCodeAt(i)
            if (board[i][j] === ' ') pedding = true
        }
        console.log(hang,'O'.charCodeAt() * row)
        if (hang == 'X'.charCodeAt() * row || zong == 'X'.charCodeAt() * row) {
            return 'X'
        }
        if (hang == 'O'.charCodeAt() * row || zong == 'O'.charCodeAt() * row) {
            return 'O'
        }
        left += board[i].charCodeAt(i)
        right += board[i].charCodeAt(row - i - 1);
    }
    if (left === 'X'.charCodeAt() * row || right === 'X'.charCodeAt() * row) return 'X'
    if (left === 'O'.charCodeAt() * row || right === 'O'.charCodeAt() * row) return 'O'
    return pedding ? "Pending" : "Draw"
};
console.log(tictactoe(["OO"," X"]))
