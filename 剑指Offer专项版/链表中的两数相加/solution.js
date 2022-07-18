/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let p1 = l1, p2 = l2
    let s1 = new Array(), s2 = new Array()
    while (p1 !== null) {
        s1.push(p1)
        p1 = p1.next
    }
    while (p2 !== null) {
        s2.push(p2)
        p2 = p2.next
    }
    let up=0,res=new ListNode()
    while (s1.length !== 0 || s2.length !== 0) {
         let num1=(s1.length===0?0:s1.shift())
         let num2=(s2.length===0?0:s2.shift())
         let count=(num1+num2+up)%10
         up=(num1+num2+up)/10
         let newNode=new ListNode(count)
         newNode.next=res.next
         res.next=newNode
    }
    if(up!==0){
        let newNode=new ListNode(count)
         newNode.next=res.next
         res.next=newNode
    }
    return res.next
};