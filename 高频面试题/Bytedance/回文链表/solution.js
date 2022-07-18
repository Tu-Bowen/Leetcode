/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
    let frontPoint = head
    function dfs(curNode) {
        if(curNode!==null){
            if(!dfs(curNode.next))return false
            if(curNode.val!==frontPoint.val)return false
            frontPoint=frontPoint.next
        }
        return true
    }
    return dfs(head)
};