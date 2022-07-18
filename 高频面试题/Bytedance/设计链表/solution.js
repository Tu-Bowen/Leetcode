class ListNode {
    constructor(val, next) {
        this.val = (val !== undefined ? val : null)
        this.next = (next !== undefined ? next : null)
    }
}
var MyLinkedList = function () {
    this.head = new ListNode()
    this.tail = this.head
    this.size = 0
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index > this.size - 1 || index < 0)
        return -1
    let i = this.head.next
    for (; index > 0; index--) {
        i = i.next
    }
    return i.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let next = this.head.next
    let newNode = new ListNode(val, next)
    //如果长度为0需要移动尾指针
    if (this.size === 0)
        this.tail = newNode
    this.head.next = newNode
    this.size++
};
/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new ListNode(val, null)
    this.tail.next = newNode
    this.tail = newNode
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.size)
        return
    if (index === this.size) {
        this.addAtTail(val)
        return
    }
    if (index <= 0) {
        this.addAtHead(val)
        return
    }
    let i = this.head.next, pre = this.head
    for (; index > 0; index--) {
        pre = i
        i = i.next
    }
    let newNode = new ListNode(val, i)
    pre.next = newNode
    this.size++
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index > this.size - 1 || index < 0)
        return -1
    let i = this.head.next, pre = this.head
    for (; index > 0; index--) {
        pre = i
        i = i.next
    }
    pre.next = i.next
    //如过把尾节点删除了就需要移动尾节点
    if (i === this.tail) {
        this.tail = pre
    }
    this.size--
};
MyLinkedList.prototype.print = function () {
    for (let i = this.head.next; i !== null; i = i.next) {
        console.log(i.val)
    }
}