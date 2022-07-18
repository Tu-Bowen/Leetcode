/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    let length=0,list=[],pres=[] 
    if(head===null)return null
    if(k===0)return head
    for(let p=head,pre=null;p!=null;pre=p,p=p.next){
        length++
        list.push(p)
        pres.push(pre)
     }
     k=k%length
     if(k===0)return head
     let res=list[length-k]
     if(res===head)return head
     pres[length-k].next=null
     list[length-1].next=head
     return res
};
let a=createList([1])
rotateRight(a,1)
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
function createList(arr){
let head=new ListNode()  
for(let i=0,p=head;i<arr.length;i++){
    p.next=new ListNode(arr[i])
    p=p.next
  }
  return head.next
} 