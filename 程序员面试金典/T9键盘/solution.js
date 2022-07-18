/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
var key={
    '2':new Set(['a','b','c']),
    '3':new Set(['d','e','f']),
    '4':new Set(['g','h','i']),
    '5':new Set(['j','k','l']),
    '6':new Set(['m','n','o']),
    '7':new Set(['p','q','r','s']),
    '8':new Set(['t','u','v']),
    '9':new Set(['w','x','y','z'])
}
 var getValidT9Words = function(num, words) {
    let ans=[] 
    for(let i=0;i<words.length;i++){
         if(words[i].length==num.length){
            let str=words[i],j=0 
            for(j=0;j<str.length;j++){
                let n=num[j]
                if(!key[n].has(str[j])){
                    break
                }
            }
            if(j==str.length){
                ans.push(str)
            }
         }
     }
     console.log(ans)
     return ans
};