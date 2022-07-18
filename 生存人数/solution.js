/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
 var maxAliveYear = function(birth, death) {
    const n = birth.length  
    let  insert = new Array(2005).fill(0)
    for(let i=0;i<n;i++){
        const x=birth[i]
        const y=death[i]
        insert[x]++
        insert[y+1]--
    }
    let sum=0,max=Number.MIN_VALUE,res=0
    for(let i=1900;i<=2000;i++){
        sum+=insert[i]
        if(sum>max){
            max=sum
            res=i
        }
    }
    return res
};