//巧用Js的Map
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
     this.data=new Map()
     this.maxsize=capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.data.has(key)){
        let value=this.data.get(key)
        this.data.delete(key)
        this.data.set(key,value)
        return value
    }else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.data.has(key))this.data.delete(key)
    this.data.set(key,value)
    if(this.data.size>this.maxsize){
        this.data.delete(this.data.keys().next().value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// let a=new Map()
// a.set("tbw","1287")
// a.set("lbw","1287")
// console.log(a.keys().next())
