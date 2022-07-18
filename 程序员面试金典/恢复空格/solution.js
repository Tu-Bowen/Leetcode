class Trie {
    constructor() {
        this.next = new Array(26)
        this.isEnd = false
    }
    /**
     * 
     * @param {String} str 
     */
    insert(str) {
        let cur = this
        for (let i = str.length-1; i >= 0 ; i--) {
            const idx = str.charCodeAt(i) - 'a'.charCodeAt()
            if (!cur.next[idx]) {
                cur.next[idx] = new Trie()
            }
            cur = cur.next[idx]
        }
        cur.isEnd = true
    }
}
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
    let dtree = new Trie(),pos = dtree
    for (let i = 0; i < dictionary.length; i++) {
        dtree.insert(dictionary[i])
    }
    let dp = new Array(sentence.length + 1).fill(Number.MAX_VALUE)//
    dp[0] = 0
    for (let i = 1; i <= sentence.length; i++) {
        pos = dtree
        dp[i] = dp[i-1] + 1
        for (let j = i; j >= 1; j--) {
            const idx = sentence.charCodeAt(j-1)-'a'.charCodeAt()
            if(!pos.next[idx]){
                break;
            }else if(pos.next[idx].isEnd){//
                dp[i] = Math.min(dp[i],dp[j-1])
            }
            if(dp[i] ===0){
                break
            }
            pos = pos.next[idx]
        }
    }
    console.log(dp)
    return dp[sentence.length]
};
var a = dictionary = ["looked","just","like","her","brother"]
var b = sentence = "jesslookedjustliketimherbrother"
respace(a,b)