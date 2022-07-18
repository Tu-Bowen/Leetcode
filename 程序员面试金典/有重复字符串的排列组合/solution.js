/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
    let res = [], mark = new Array(S.length).fill(false)
    S = S.split('').sort()
    let dfs = (str, mark) => {
        if (str.length === S.length) {
            res.push(str.join(""))
            return
        }
        console.log(str,mark)
        for (let i = 0; i < S.length; i++) {
            if(i>0&&S[i] === S[i-1]&&!mark[i-1])
            continue;
            if (!mark[i]) {
                str.push(S[i])
                mark[i] = true
                dfs([...str], [...mark], i)
                str.pop()
                mark[i] = false
            }
        }
    }
    for (let i = 0; i < S.length; i++) {
        if(i>0&&S[i] === S[i-1])
        continue;
        mark[i] = true
        dfs([S[i]], [...mark])
        mark[i] = false
    }
    return res
};
console.log(permutation("qqe"))