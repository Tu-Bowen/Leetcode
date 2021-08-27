class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

let op:ListNode=new ListNode(1,new ListNode(2,new ListNode(3,null)))
 
function  cout(head:ListNode):number{
    for(let p:ListNode=head;p!=null;p=p.next){
        console.log(p.val);
    }
    return 0;
}


/*class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param head ListNode类 
 * @return ListNode类
 */
export function ReverseList(head: ListNode): ListNode {
    // write code here
    if(!head)return null;
    let last:ListNode=null,cur:ListNode=head;
    for(;cur!=null;){
        let p=cur.next
        cur.next=last;
        last=cur;
        cur=p;
    }
    return last;
}

cout(ReverseList(op))

