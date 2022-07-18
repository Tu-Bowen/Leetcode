/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
     let fast = head,last = head;
     while(k!=0){
         fast=fast.next
         k--
     }
     while(fast!=null){
         last = last.next
         fast = fast.next
     }
     return last
};