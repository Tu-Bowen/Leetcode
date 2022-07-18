/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function (s) {
    let ops = [1], res = 0, sign = 1
    let i = 0
    while (i < s.length) {
        if(s[i]===" "){
            i++
        }else if(s[i]==="+"){
            sign=ops[ops.length-1]
            i++
        }else if(s[i]==="-"){
            sign=-ops[ops.length-1]
            i++
        }else if(s[i]==="("){
            ops.push(sign)
            i++
        }else if(s[i]===")"){
            ops.pop()
            i++
        }else{
            let num=0
            while(i<s.length&&"0".charCodeAt()<=s[i].charCodeAt()&&s[i].charCodeAt()<="9".charCodeAt()){
                num=num*10+Number(s[i])
                i++
            }
            res=res+sign*num
        }
    }
    return res
};