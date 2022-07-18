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
var detectCycle = function (head) {
    let fast = head, slow = head
    while (true) {
        if(fast===null||fast.next===null)return null
        if(slow===fast)break
        fast=fast.next.next
        slow=slow.next
    }
    let p=head
    while(p!=slow){
        p=p.next
        slow=slow.next
    }
    return slow
};