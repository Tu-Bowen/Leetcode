/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let A=headA,B=headB
    while(true){
        A=(A.next!==null?A.next:B)
        B=(B.next!==null?B.next:A)
        if(A===B)return A
    }
};