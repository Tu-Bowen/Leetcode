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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let nodes = []
    for (let p = head, pre = null; p !== null; pre = p, p = p.next) {
        p.pre = pre
        nodes.push(p)
    }
    let n = nodes.length
    for (let i = 1; i <= Math.floor((n - 1) / 2); i++) {
        let p1 = nodes[i], p2 = nodes[n - i]
        if (p2 !== p1) {
            //断开p2
            p2.pre.next=p2.next
            if(p2.next!==null)
            p2.next.pre=p2.pre
            //连接p2
            p1.pre.next = p2
            p2.pre=p1.pre
            p2.next=p1
            p1.pre=p2

        }
        // coutList(head)
    }
    return head
};

function createList(data) {
    let head = new ListNode(), p = head
    for (let i = 0; i < data.length; i++) {
        p.next = new ListNode(data[i], null)
        p = p.next
    }
    return head.next
}
function coutList(head) {
    let str = ""
    for (let i = head, a = 0; i !== null && a < 5; a++, i = i.next) {
        str = str + i.val
    }
    console.log(str)
}
let a = createList([1, 2, 3, 4, 5])
coutList(reorderList(a))