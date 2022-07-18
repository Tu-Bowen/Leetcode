/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
    let maxLen = 1,l=0,n = s.length,ins=new Map()//,tbw="" 
    if(n===0)return 0
    for (let r = 0; r < n; r++) {
        if(!ins.has(s[r])){
            let len=r-l+1
            ins.set(s[r],r)
            if(len>maxLen){
                maxLen=len
                // tbw=s.substr(l,len)
            }
        }else{
            // console.log(s[r],s[l])
            let fidx=ins.get(s[r])
            ins.forEach((v,k)=>{
                if(v<(fidx+1)){
                    ins.delete(k)
                }
            })
            // console.log(ins)
            ins.set(s[r],r)
            l=fidx+1
        }
    }
    // console.log(tbw)

    return maxLen
};
lengthOfLongestSubstring("abcabcbb")