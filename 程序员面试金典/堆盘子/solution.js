/**
 * @param {number} cap
 */
var StackOfPlates = function (cap) {
    this.stack = [[]]
    this.cap = cap
};

/** 
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function (val) {
    if (this.cap === 0) return null
    if (!this.stack.length || this.stack[this.stack.length - 1].length === this.cap)
        this.stack.push(new Array())
    this.stack[this.stack.length - 1].push(val)
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function () {
    while (this.stack.length && !this.stack[this.stack.length - 1].length) this.stack.pop()
    if(!this.stack.length)return -1 
    const res = this.stack[this.stack.length - 1].pop()
    while (this.stack && this.stack.length && !this.stack[this.stack.length - 1].length) this.stack.pop()
    return res
};

/** 
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function (index) {
    while (index < this.stack.length && !this.stack[index].length) this.stack.splice(index, 1)
    if (index >= this.stack.length) return -1
    const res = this.stack[index].pop()
    while (index < this.stack.length && !this.stack[index].length) this.stack.splice(index, 1)
    return res
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */

let a = new StackOfPlates(1)
a.push(1)
a.push(2)
console.log(a.stack)
a.popAt(1)
console.log(a.stack)
a.pop()
console.log(a.stack)
a.pop()
console.log(a.stack)
