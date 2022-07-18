/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var mergeKLists = function (lists) {
    let n = lists.length, head = new ListNode(), p = head
    let pointers = new Array(n)
    for (let i = 0; i < n; i++) {
        pointers[i] = lists[i]
    }
    while (true) {
        let min = 10001, mi = -1
        for (let i = 0; i < n; i++) {
            if (pointers[i] === null || !pointers[i]) {
                continue
            }
            if (min > pointers[i].val) {
                min = pointers[i].val
                mi = i
            }
        }
        if (min === 10001) break
        console.log(min)
        pointers[mi]=pointers[mi].next
        p.next = new ListNode(min)
        p = p.next

    }
    return head.next
};

let a = new ListNode(1, new ListNode(4, new ListNode(5, null)))
let b = new ListNode(1, new ListNode(3, new ListNode(4, null)))
let c = new ListNode(2, new ListNode(6, null))
let p = [a, b, c]
console.log(mergeKLists(p))