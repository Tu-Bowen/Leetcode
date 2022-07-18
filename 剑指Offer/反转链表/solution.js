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
 var reverseList = function(head) {
     let f=null,b=head
     while(b!=null){
         let next=b.next
         b.next=f
         f=b
         b=next
     }
     return f
};