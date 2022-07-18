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
 var hasCycle = function(head) {
    let fast=head,slow=head
    while(fast!==slow){
        slow=slow.next
        if(fast.next!==null){
            fast=fast.next.next
        }else{
            return false
        }
        if(slow===null||fast===null){
            return false
        }
    }
    return true
};