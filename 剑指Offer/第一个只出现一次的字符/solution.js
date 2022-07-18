/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    let n = s.length, m = new Map(), q = new Array()
    for (let i = 0; i < n; i++) {
        let c=s[i]
        if(m.has(c)){
            m.set(c,-1)
            while(q.length!==0&&m.get(q[0][0])===-1){
                q.shift()
            }
        }else{
            m.set(c,i)
            q.push([c,i])
        }
    }
    return q.length===0?' ':q[0][0]
};