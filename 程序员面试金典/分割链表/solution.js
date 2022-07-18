/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let l1=new ListNode(), p1=l1, l2=new ListNode(), p2=l2
    for (let p = head; p != null; p = p.next) {
        if(p.val<x){
            p1.next=p
            p1=p1.next
        }else{
            p2.next=p
            p2=p2.next
        }
    }
    p1.next=l2.next
    return l1.next
};