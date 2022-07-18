/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null) return null
    if (head.next === null) return head
    if (head.next.next === null) {
        let res = head.next
        head.next.next = head
        head.next = null
        return res
    }
    let pre = head, cur = head.next, first = true,last=null
    while (cur !== null && pre !== null) {
        pre.next = cur.next
        cur.next = pre
        if (first) {
            first = false
            head = cur
        }else if(last!==null){
            last.next=cur
        }
        if (pre.next === null || pre.next.next === null) break
        last=pre
        cur = pre.next.next
        pre = pre.next
    }
    return head
};