/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let m = new Map()
    m.set(1, {
        last: null,
        current: head
    })
    for (let last = head, p = head.next, count = 2; p !== null; last = last.next, p = p.next, count++) {
        m.set(count, {
            last: last,
            current: p
        })
    }
    let fnp = m.get(count - n)
    if (fnp.last === null) {
        head = head.next
    } else {
        fnp.last.next = fnp.current.next
    }
    return head
};