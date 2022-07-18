/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
    let s = new Set();
    let last = new ListNode(1)
    last.next = head;
    for (let p = head; p != null; p = p.next) {
        let _last = last.next
        if (s.has(p.val)) {
            last.next = p.next;
        } else {
            s.add(p.val)
        }
        last = _last
    }
    return head;
};