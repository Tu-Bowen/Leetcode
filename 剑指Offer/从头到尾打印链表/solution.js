/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    var stack = [],res=[]
    for (let i = head; i !== null; i++) {
        stack.push(i.val)
    }
    for(let j=0;j<stack.length;j++){
        res.push(stack.pop())
    }
    return res
};