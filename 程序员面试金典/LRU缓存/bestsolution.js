function Node(key,val){
        this.key=key
        this.val=val
        this.pre=null
        this.next=null
}
class Doublelist{
    constructor(){
        this.head=new Node("haed",-1)
        this.tail=this.head
    }
    insert_back(key,val){
        let newNode=new Node(key,val)
        this.tail.next=newNode
        newNode.pre=this.tail
        this.tail=this.tail.next
        return newNode
    }
    delete_node(node){
        let {pre,next}=node
        if(node==this.tail)
        this.tail=pre
        if(pre!=null)
        pre.next=next
        if(next!=null)//记住js中null不能随意用!判空
        next.pre=pre
        node.pre=null
        node.next=null
        return node
    }
    cout(){
        let p=this.head.next
        console.log("链表：")
        while(p!=null){
            console.log(p.val)
            p=p.next
        }
    }
}
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
     this.maxsize=capacity
     this.size=0
     this.map=new Map()
     this.list=new Doublelist()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key))return -1
    let node=this.map.get(key)
    let res=node.val
    this.list.delete_node(node)
    this.list.insert_back(node.key,node.val)
    return res
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        let node=this.map.get(key)
        this.list.delete_node(node)
    }else{
        this.size++
    }
    let newNode=this.list.insert_back(key,value)
    this.map.set(key,newNode)
    if(this.size>this.maxsize){
        this.map.delete(this.list.head.next.key)
        this.list.delete_node(this.list.head.next)
        this.size--
    }
};
LRUCache.prototype.cout=function(){
    this.list.cout()
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
let cache = new LRUCache( 2 /* 缓存容量 */ );
cache.put(2, 1);
cache.put(1, 1);
//cache.cout()
cache.put(2, 3);
// cache.cout()
cache.put(4, 1);
console.log(cache.get(1))
console.log(cache.get(2))
// cache.cout()