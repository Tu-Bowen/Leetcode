/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let ans=0
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!hasSameChar(words[i], words[j])) {
                ans=Math.max(ans,words[i].length*words[j].length)
            }
        }
    }
    function hasSameChar(str1, str2) {
        let x=0,y=0
        for(let i=0;i<str1.length;i++){
            let ascll=str1[i].charCodeAt()-'a'.charCodeAt()
            x=x|(1<<ascll)
        }
        for(let i=0;i<str2.length;i++){
            let ascll=str2[i].charCodeAt()-'a'.charCodeAt()
            y=y|(1<<ascll)
        }
        return (x&y)!==0
    }
    return ans
};
