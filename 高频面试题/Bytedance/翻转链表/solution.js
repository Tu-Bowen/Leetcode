/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let pre=null 
    for(let cur=head,next=head.next;cur!=null;cur=next){
         next=cur.next
         cur.next=pre
         pre=cur
     }
     return pre
}; 