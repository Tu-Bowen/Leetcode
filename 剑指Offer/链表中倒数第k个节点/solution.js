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
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
     let s= new Map(),i=0
     for(let p=head;p!==null;p=p.next){
         s.set(++i,p.val)
     }
     return s.get(i-k+1)
};