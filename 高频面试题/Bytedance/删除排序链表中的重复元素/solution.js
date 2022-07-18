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
var deleteDuplicates = function (head) {
    if (head === null || head.next === null)
        return head
    let newHaed = new ListNode(0, head),cur=newHaed
    while (cur.next !== null && cur.next.next !== null) {
        if(cur.next.val===cur.next.next.val){
            let x=cur.next.val
            while(cur.next!==null&&x===cur.next.val){
                cur.next=cur.next.next
            }
        }else{
            cur=cur.next
        }
    }
    return newHaed.next
};