var CQueue = function () {
    this.stack_1 = new Array()
    this.stack_2 = new Array()
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stack_1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.stack_2.length === 0) {
        while (this.stack_1.length !== 0) {
            let number = this.stack_1.pop()
            this.stack_2.push(number)
        }
    }
    if (this.stack_2.length === 0) {
        return -1
    } else {
        return this.stack_2.pop()
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */