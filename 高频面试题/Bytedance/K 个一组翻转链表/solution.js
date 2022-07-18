/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
  let l=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,null)))))
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let map = []
    map.push({
        last: null,
        node: head
    })
    let last = head
    for (let p = head.next; p !== null; p = p.next) {
        map.push({
            last,
            node: p
        })
        last = p
    }
    function reserve(start, end) {
        for (let i = start + 1; i <= end; i++) {
            let last = map[i].last, node = map[i].node
            node.next = last
        }
        map[start].node.next=null
        return map[start].node
    }
    let length = map.length
    if (length < k) return head
    let lastK = null, res = map[k - 1].node
    for (let i = 1; i <= Math.floor(length / k); i++) {
        console.log((i - 1) * k, i * k - 1)
        let _lastK= reserve((i - 1) * k, i * k - 1)
        if (lastK !== null) {
            lastK.next = map[i * k - 1].node
        }
        console.log(_lastK)
        lastK = _lastK
    }
    if (length % k !== 0) {
        lastK.next = map[Math.floor(length / k) * k].node
    }

    return res
};
let list=reverseKGroup(l,2)
