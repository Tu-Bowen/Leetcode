/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
     let p1=list1,p2=list2,head=new ListNode(),cur=head
     while(p1!==null||p2!==null){
        let num1=(p1===null?101:p1.val)
        let num2=(p2===null?101:p2.val) 
        if(num1<num2){
            cur.next=new ListNode(num1)
            p1=p1.next
        }else{
            cur.next=new ListNode(num2)
            p2=p2.next
        }
        cur=cur.next
     }
     return head.next
}; 