/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let f = head
    if (head.val === val) return head.next
    for (let p = head.next; p !== null; p = p.next) {
        //let next = p.next
        if (p.val === val) {
            f.next = p.next
            break
        }
        f = p
    }
    return head
};