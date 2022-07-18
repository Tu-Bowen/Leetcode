/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
     const n = lists.length
     let pointers = new Array(),head = new ListNode(),cur=head
     let check = ()=>{
         for(let i=0;i<pointers.length;i++){
             if(pointers[i]){
                 return true
             }
         }
         return false
     }
     for(let i=0;i<n;i++){
         pointers.push(lists[i])
     }
     while(check()){
        let node = null,p=null
        for(let i=0;i<pointers.length;i++){
            if(pointers[i]&&(!node||node.val>pointers[i].val)){
                node = pointers[i]
                p=i
            }
        }
        pointers[p]=pointers[p].next
        cur.next = new ListNode(node.val)
        cur=cur.next
     }
     return head.next
};