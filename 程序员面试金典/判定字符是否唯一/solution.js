/**
 * @param {string} astr
 * @return {boolean}
 */
 var isUnique = function(astr) {
    let a=new Map()
    for(let i=0;i<astr.length;i++){
       a[astr[i]]=(a[astr[i]]===1?(a[astr[i]]+1):1)
       if(a[astr[i]]>1){
           return false
       }
    }
    return true
};

isUnique("leetcode")