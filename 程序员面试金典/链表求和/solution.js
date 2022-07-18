/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(),cur=head,sum=0,carry=0
    while(l1||l2){
        const n1=(l1?l1.val:0),n2=(l2?l2.val:0)
        sum=(carry+n1+n2>=10?(carry+n1+n2-10):(carry+n1+n2));
        carry=(carry+n1+n2>=10?1:0);
        cur.next=new ListNode(sum)
        cur=cur.next
        l1=l1?l1.next:l1
        l2=l2?l2.next:l2
    }
    if(carry!=0){
        cur.next=new ListNode(carry)
    }
    return head.next
};