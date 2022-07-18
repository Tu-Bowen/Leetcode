/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let num = 0,  start = 0, oldstart = 0, str = [].concat(chars)
    function numcnt(num) {
        if (num === 1) return []
        let res = ""
        while (num !== 0) {
            res = num % 10 + res
            num = Math.floor(num / 10)
        }
        return res.split("")
    }

    for (let i = 0; i < str.length; i++) {
        if ((i !== 0 && str[i] !== str[i - 1]) || i === str.length - 1) {
            if (i === str.length - 1 && str[i] === str[i - 1]) {
                num++
            }
            let arr = numcnt(num), del = parseInt(arr.join("")) - 1
            arr.length !== 0 && chars.splice(start + 1, del, ...arr) && chars.splice(start, 1, str[oldstart])
            start = start + 1 + arr.length
            oldstart = i
            num = 0
        }
        num++
    }
    return chars.length
};