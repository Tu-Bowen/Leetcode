/**
 * @param {string} s
 * @return {string[]}
 */
//有重复
var permutation = function (s) {
    function strSort(str) {
        let a = str.split('').sort((a, b) => {
            return a.charCodeAt() - b.charCodeAt()
        })
        return a.join('')
    }
    let str = strSort(s),res=[],n=s.length, mark=new Array(n).fill(false)
    function tbw(tt) {
        // console.log(tt)
        if (tt.length === n) {
            res.push(tt)
        }
        for (let i = 0; i < n; i++) {
            if (i !== 0 && str[i] === str[i - 1]&&!mark[i-1]) continue;
            if(mark[i])continue;
            mark[i]=true
            tbw(tt + str[i])
            mark[i]=false
        }
    }
    tbw('')
    // console.log(res)
    return res
};
permutation('abc')
//无重复
var _permutation = function (s) {
    var res = [], n = s.length, p = new Set()
    var tbw = function (str) {
        if (str.length === n) {
            res.push(str)
        }
        for (let i = 0; i < n; i++) {
            if (!p.has(s[i])) {
                p.add(s[i])
                tbw(str + s[i])
                p.delete(s[i])
            }
        }
    }
    tbw('')
    // console.log(res)
    return res
};