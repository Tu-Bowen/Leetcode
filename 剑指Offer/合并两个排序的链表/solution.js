/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
    let haed = new ListNode(), p = haed
    while (l1 !== null && l2 !== null) {
       //console.log(haed)
        let num1 = l1.val, num2 = l2.val
        if (num1 < num2) {
            p.next = new ListNode(num1)
            l1 = l1.next
        } else {
            p.next = new ListNode(num2)
            l2 = l2.next
        }
        p=p.next
    }
    if (l1 !== null) p.next = l1
    if (l2 !== null) p.next = l2
    return haed.next
};