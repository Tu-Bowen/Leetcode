/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var _findWords = function (board, words) {
    const row = board.length, col = board[0].length, mark = []
    let res = []

    const inboard = (str) => {
        for (let i = 0; i < row; i++) {
            mark[i] = []
            for (let j = 0; j < col; j++) {
                mark[i].push(false);
            }
        }
        const dfs = (k, i, j) => {
            if (str[k] != board[i][j]) {
                return false
            } else if (k == str.length - 1) {
                return true
            }
            mark[i][j] = true
            const pointer = [{ i: 0, j: 1 }, { i: 0, j: -1 }, { i: -1, j: 0 }, { i: 1, j: 0 }]
            for (let p = 0; p < pointer.length; p++) {
                const newi = i + pointer[p].i, newj = j + pointer[p].j
                if (newi > -1 && newj > -1 && newi < row && newj < col && !mark[newi][newj]) {
                    const flag = dfs(k + 1, newi, newj);
                    if (flag) {
                        return true
                    }
                }
            }
            mark[i][j] = false
            return false
        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (dfs(0, i, j)) {
                    return true
                }
            }
        }
        return false
    }

    for (let i = 0; i < words.length; i++) {
        //console.log(words[i],inboard(words[i]))
        if (inboard(words[i])) {
            res.push(words[i])
        }
    }
    //console.log(inboard("eat"))
    return res
};




class Treenode {
    children = new Map();
    word = "";
}
var findWords = function (board, words) {
    let res=[],row=board.length,col=board[0].length

    //把words数组转换为字典树
    let root = new Treenode();
    for (let i = 0; i < words.length; i++) {
        let node = root, str = words[i];
        for (let j = 0; j < str.length; j++) {
            if (node.children.get(str[j])) {
                node = node.children.get(str[j])
            } else {
                const newnode = new Treenode()
                node.children.set(str[j], newnode)
                node = newnode
            }
        }
        node.word = str
    }
    //dfs遍历判断是否包含字符串
    const dfs = (i,j,root) => {
        const c=board[i][j];
        const cldnode=root.children.get(c)
        //console.log(cldnode)
        if(cldnode.word!=''){
            res.push(cldnode.word)
            cldnode.word=''
        }
        board[i][j]='#'
        const pointer = [{ i: 0, j: 1 }, { i: 0, j: -1 }, { i: 1, j: 0 }, { i: -1, j: 0 }]
        for(let p=0;p<pointer.length;p++){
            const newi=i+pointer[p].i,newj=j+pointer[p].j;
            if(newi>-1&&newj>-1&&newi<row&&newj<col&&cldnode.children.get(board[newi][newj])){
                //console.log(cldnode.children.get(board[newi][newj]))
                dfs(newi,newj,cldnode)
            }
        }
        board[i][j]=c
        if(Object.keys(cldnode.children).length==0){
            delete root.children[c]
        }
    }
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(root.children.get(board[i][j])){
                dfs(i,j,root)
            }
        }
    }
    //console.log(res)
    return res
}

const board = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]]
const words = ["oath", "pea", "eat", "rain"]


//findWords(board, words)
console.log(findWords(board,words))

