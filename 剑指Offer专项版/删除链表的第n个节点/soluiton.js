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
 var removeNthFromEnd = function(head, n) {
     let m=new Map(),len=0
    for(let p=head;p!=null;p=p.next){
        m.set(len,p)
        len++
    } 
    if(n===len)return head.next
    m.get(len-n-1).next=m.get(len-n).next
    return head
};