/**
 * @param {number[]} big
 * @param {number[]} small
 * @return {number[]}
 */
var shortestSeq = function (big, small) {
    let m = new Map(),diff=small.length,min=big.length,l=0,res=[]
    for (let i = 0; i < small.length; i++) {
        if (m.has(small[i]))
            m.set(small[i], m.get(small[i]) + 1)
        else m.set(small[i],1)
    }
    for(let r=0;r<big.length;r++){
        const c=big[r]
        if(m.has(c)){
            if(m.get(c)>0){
                diff=diff-1
            }
            m.set(c,m.get(c)-1)
        }
        while(diff==0){
            const lc=big[l]
            if(r-l<min){
                min=r-l
                res.push([l,r])
            }
            if(m.has(lc)){
                if(m.get(lc)>=0)
                diff=diff+1
                m.set(lc,m.get(lc)+1)
            }
            l++
        }
    }
    if(res.length!=0)return res[res.length-1]
    return []
};

let big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7],small = [1,5,9]
shortestSeq(big,small)