/**
 * initialize your data structure here.
 */
 var MinStack = function() {
     this.s=new Array()
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let p={val:x},len=this.s.length
    if(this.s.length===0){
        p.min=x
    }else if(this.s[len-1].min<=x){
        p.min=this.s[len-1].min
    }else{
        p.min=x
    }
   s.push(p) 
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length-1].val
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return this.s[this.s.length-1].min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */