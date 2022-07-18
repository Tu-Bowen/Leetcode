/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) == -1) return []
    let visited = new Array(wordList.length).fill(false),ans=[]
    for (let i = 0; i < wordList.length; i++) {
        if(wordList[i]==beginWord){
            visited[i]=true
            
        }
    }
    ans.push(beginWord)
    let oneDiff = (str1, str2) => {
        let res = 0
        for (let i = 0; i < str1.length; i++) {
            res += (str1[i] === str2[i])
        }
        return res === str1.length - 1
    }
    function dfs(beginWord,visited,endWord,path,wordList){
        if(beginWord===endWord){
            return true;
        }else{
            for(let i = 0; i<wordList.length; i++){
                if(!visited[i]&&oneDiff(beginWord,wordList[i])){
                    path.push(wordList[i]);
                    visited[i] = true;
                    if(dfs(wordList[i],visited,endWord,path,wordList))return true;
                    path.pop();
                }
            }
            return false;
        }
    }
    if(dfs(beginWord,visited,endWord,ans,wordList))
    return ans
    return []
}












//  var findLadders = function (beginWord, endWord, wordList) {
//     if (wordList.indexOf(endWord) === -1) {
//         return []
//     }

//     function oneDiff(str1, str2) {
//         let len = str1.length, res = 0
//         for (let i = 0; i < len; i++) {
//             res += str1[i] === str2[i]
//         }
//         return res === len - 1
//     }

//     let res = new Set(), len = wordList.length, tmpStr = beginWord
//     for (let i = 0; i < len; i++) {
//         // log->cog 但是由于顺序的原因找到了lot导致结果出错
//         if (oneDiff(beginWord, wordList[i]) && !res.has(wordList[i])) {
//             beginWord = wordList[i]
//             res.add(beginWord)
//             i = -1
//         } else if (beginWord === endWord || oneDiff(beginWord, endWord)) {
//             res.add(endWord)
//             break
//         }
//     }
//     let tmpArr = Array.from(res)
//     if (res.has(endWord)) {
//         tmpArr.unshift(tmpStr)
//     }
//     return tmpArr
// }; 
