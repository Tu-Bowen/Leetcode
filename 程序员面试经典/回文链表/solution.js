/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let s = []
    for (let p = head; p != null; p = p.next) {
        s.push(p.val);
    }

    const isH = (str) => {
        let n = str.length;
        if (n == 1) return true
        let mid = parseInt((n + 1) / 2);
        let r = mid, l = r - ((mid === n / 2) ? 1 : 2);
        //console.log(n/2,mid,l,r)
        while (l >= 0 && r < n && str[l] == str[r]) {
            l--, r++;
        }
        //console.log(l,r)
        if (l == -1 && r == n)
            return true
        return false
    }
    //console.log(isH("00"))
    return isH(s)
};




var isPalindrome = function (head) {
    let front=head
    const dfs=(root)=>{
        if(root!=null){
            if(!dfs(root.next)){
                return false;
            }
            if(root.val!=front.val){
                return false;
            }
            front = front.next;
        }
        return true
    }
    return dfs(head)
};
