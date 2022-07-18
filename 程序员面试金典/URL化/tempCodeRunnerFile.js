/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
 var replaceSpaces = function(S, length) { 
    for(let i=0,p=0;i<S.length&&p<length;i++,p++){
        if(S[i]=" "){
            res+="%20"
        }else{
            res+=S[i]
        }
        return res
    }
};

console.log(replaceSpaces("Mr John Smith    ",13))