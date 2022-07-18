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
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(), cur = head, up = 0
    while (l1 !== null || l2 !== null) {
        let num1 = (l1 === null ? 0 : l1.val)
        let num2 = (l2 === null ? 0 : l2.val)
        l1=(l1!==null?l1.next:null)
        l2=(l2!==null?l2.next:null)
        let curnum = (num1 + num2 + up) % 10
        up = Math.floor((num1 + num2 + up) / 10)
        cur.next = new ListNode(curnum)
        cur = cur.next
    }
    if (up !== 0)
        cur.next = new ListNode(up)
    return head.next
};
console.log(addTwoNumbers(new ListNode(1),new ListNode(2)))