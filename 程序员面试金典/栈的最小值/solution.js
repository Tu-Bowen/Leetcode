/**
 * initialize your data structure here.
 */
 var MinStack = function() {
     this.satck=new Array()
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.satck.length===0)
    this.satck.push({val:x,min:x})
    else {
        const obj = {min:(x<this.satck[this.satck.length-1].min?x:this.satck[this.satck.length-1].min),val:x}
        this.satck.push(obj)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.satck.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.satck.length===0?null:this.satck[this.satck.length-1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return  this.satck.length===0?null:this.satck[this.satck.length-1].min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

let ns = new MinStack()
ns.push(-2)
ns.push(0)
ns.push(-3)
ns.pop()
console.log(ns.satck)