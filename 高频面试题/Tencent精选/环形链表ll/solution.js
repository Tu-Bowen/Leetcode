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
    let fast=head,slow=head
    if(head==null||head.next===null){
        return null
    }
    while(slow!==null){
        if(fast===null||fast.next===null){
            return null
        }else{
            fast=fast.next.next
        }
        slow=slow.next
        if(slow===fast){
            let ptr=head
            while(ptr!==slow){
                ptr=ptr.next
                slow=slow.next
            }
            return ptr
        }
    }
    return null
};