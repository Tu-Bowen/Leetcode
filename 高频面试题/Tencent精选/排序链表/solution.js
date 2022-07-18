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
  let a=new ListNode(4,new ListNode(2,new ListNode(1,new ListNode(3,null))))
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (head === null || head.next === null) return head
    function toSortList(head, tail) {
        if (head === null) return
        if (head.next === tail) {
            // console.log(head)
            head.next = null
            return head
        }
        let fast = head, slow = head
        while (fast !== tail) {
            slow = slow.next
            fast = fast.next
            if (fast != tail) {
                fast = fast.next
            }
        }
        return merge(toSortList(head, slow), toSortList(slow, tail))
    }
    function merge(list1, list2) {
        if (list1 === null) return list2
        if (list2 === null) return list1
        let res = new ListNode(), p = res
        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                p.next = list1
                list1 = list1.next
            } else {
                p.next = list2
                list2 = list2.next
            }
            p = p.next
        }
        if (list1 != null) {
            p.next = list1
        }
        if (list2 !== null) {
            p.next = list2
        }
        return res.next
    }
    return toSortList(head, null)
};
sortList(a)