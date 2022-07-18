/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
     let ans = [],map={}
     for(let i=0;i<strs.length;i++){
        let words = new Array(26).fill(0)
        for(let j=0;j<strs[i].length;j++){
            words[strs[i].charCodeAt(j)-'a'.charCodeAt()]++  
            //console.log(strs[i].charCodeAt(j)-'a'.charCodeAt())
         }
         const wordskey = words.toString()
         if(map[wordskey]){
             map[wordskey].push(strs[i])
         }else{
             map[wordskey] = [strs[i]]
         }
     }
     //console.log(map)
     const keys = Object.keys(map)
     keys.forEach(item=>{
         ans.push(map[item])
     })
     return ans
};

var op = ["eat", "tea", "tan", "ate", "nat", "bat"]

groupAnagrams(op)