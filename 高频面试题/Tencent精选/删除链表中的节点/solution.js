/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
     for(let pre=node,p=node.next;p!==null;p=p.next){
        pre.val=p.val
        if(p.next===null){
            pre.next=null
        }
     }      
};