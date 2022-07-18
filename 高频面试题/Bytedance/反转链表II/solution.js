function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let a=new ListNode(3,new ListNode(5))
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let newHead = new ListNode(), newP = newHead, between = 0, stack = [], count = 0
    for (let p = head; p !== null; p = p.next) {
        count++
        if (count === left)
            between = 1
        if (between === 1) {
            stack.push(p)
            // console.log(count)
            if (count === right)
                between = 2
            continue
        }
        if (between === 2) {
            while (stack.length !== 0) {
                let node = stack.pop()
                newP.next = node
                newP = newP.next
            }
            between = 0
        }
        newP.next = p
        newP = newP.next
    }
    while(stack.length!==0){
        let node = stack.pop()
        newP.next = node
        newP = newP.next
    }
    newP.next=null
    return newHead.next
};
console.log(reverseBetween(a,1,2))