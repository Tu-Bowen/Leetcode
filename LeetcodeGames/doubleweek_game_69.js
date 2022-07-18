/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    let titleArr = title.split(" ")
    for (let i = 0; i < titleArr.length; i++) {
        if (titleArr[i] === " ") continue
        if (titleArr[i].length < 3) {
            titleArr[i] = titleArr[i].toLowerCase()
            continue
        }
        let newStr = titleArr[i][0].toUpperCase() + titleArr[i].slice(1).toLowerCase()
        titleArr[i] = newStr
    }
    return titleArr.join(" ")
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 链表的最大孪生和
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    if (head === null) return 0
    let p = head, a = []
    for (; p !== null; p = p.next) {
        a.push(p.val)
    }
    let i = 0, j = a.length - 1, ans = 0
    while (i < j) {
        ans = Math.max(ans, a[i++] + a[j--])
    }
    return ans
};
/**
 * 连接两字母单词得到的最长回文串
 * @param {string[]} words
 * @return {number}
 */
 var longestPalindrome = function (words) {
    let m = new Map(), mid = false, res = 0
    for (let i = 0; i < words.length; i++) {
        if (m.has(words[i])) {
            m.set(words[i], m.get(words[i]) + 1)
        } else {
            m.set(words[i], 1)
        }
    }
    m.forEach((val, key) => {
        let rev = key[1] + key[0]
        if (rev === key) {
            if (val % 2 === 1) {
                mid = true
            }
            res += 2 * (Math.floor(val / 2) * 2)
        } else if (rev > key) {
            if (m.has(rev))
                res += 4 * Math.min(m.get(rev), val)
        }
    })
    if(mid)res+=2
    return res
};
console.log(longestPalindrome(["ll","xx","cc"]))