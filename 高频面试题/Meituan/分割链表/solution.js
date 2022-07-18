/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let big = new ListNode(), bigMove = big,small = new ListNode(),smallMove=small
    for (let pre = null, p = head; p !== null; pre = p, p = p.next) {
        if (p.val < x) {
            bigMove.next=p
            bigMove=bigMove.next
        } else {
            smallMove.next=p
            smallMove=smallMove.next
        }
    }
    bigMove.next=null
    smallMove.next=big.next
    return small.next
};