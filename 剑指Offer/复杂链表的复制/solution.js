/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    //所有节点都复制一遍
    for (let p = head; p != null; p = p.next.next) {
        let newnode = new Node(p.val, p.next, null)
        p.next = newnode
    }
    //复制随机节点
    for (let p = head; p != null; p = p.next.next) {
        let newnode = p.next
        newnode.random = (p.random === null ? null : p.random.next)
    }
    //将链表分开
    let newhead = head.next, n = newhead
    for (let p = head; p !== null; p = p.next) {
        let next = n.next
        n.next=next.next
        p.next=next
        n=n.next
    }
    return newhead
};