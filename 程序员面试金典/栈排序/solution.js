var SortedStack = function() {
    this.s=[]
    this._s=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {
    while(this.s.length!==0&&val>this.s[this.s.length-1])this._s.push(this.s.pop())
    this.s.push(val)
    while(this._s.length!==0)this.s.push(this._s.pop())
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function() {
    this.s.pop()
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {
    return this.s[this.s.length-1]
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {
    return this.s.length===0
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */