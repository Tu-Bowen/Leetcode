/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
     const m = new Set()
     let i=0
     for(let p=head;p!=null;p=p.next,i++){
        if(m.has(p)){
            return p
        } 
        m.add(p)
     }
     return null
};  