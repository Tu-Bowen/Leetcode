function longestCommonPrefix(strs: string[]): string {
    let res:string=""
    let p:number=0
    let len:number=220
    let f=true
    for(let i:number=0;i<strs.length;i++){
        if(strs[i].length<len)len=strs[i].length
    }
    while(p<len&&f){
        let target:string=strs[0][p]
        for(let i:number=1;i<strs.length;i++){
            if(strs[i][p]!==target){
                res=strs[i].substr(0,p)
                f=false
                break
            }
        }
        if(p===len-1&&f){
            res=strs[0].substr(0,p+1)
        }
        p++
    }
    return res
};
console.log(longestCommonPrefix(["a"]))