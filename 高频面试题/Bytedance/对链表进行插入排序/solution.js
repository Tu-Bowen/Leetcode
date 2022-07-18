/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    let pre = null,theNext=head.next
    for (let i = head; i !== null; i = theNext) {
        let tmp = i.val, j = i
        //记录原来的
        theNext=i.next
        i.last = pre       
        pre = i
        // console.log(i)
        while (j !== head && tmp < j.last.val) {
            j.val=j.last.val
            j = j.last
        }
        j.val=tmp
    }
    return head
};

let s = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3, null))))

console.log(insertionSortList(s))
for (let p = s; p !== null; p = p.next) {
    console.log(p.val)
}