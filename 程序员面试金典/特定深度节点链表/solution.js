/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
 var listOfDepth = function(tree) {
    if(!tree)return []
   var r = new Array() 
   var a = new Array()
   a.push(tree)
    while(a.length!==0){
        const listlength=a.length
        var listnode=new ListNode()
        var head = listnode
        for(let i=0;i<listlength;i++){
           const shiftnode= a.shift()
           listnode.next=new ListNode(shiftnode.val)
           listnode=listnode.next
           if(shiftnode.left!=null)a.push(shiftnode.left)
           if(shiftnode.right!=null)a.push(shiftnode.right)
        }
        r.push(head.next)
    }
   return r;
};

