var MaxQueue = function() {
    this.list=[]
    this.q=[]
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(this.q.length===0)return -1
    return this.q[0]
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.list.push(value)
    while(this.q!==0&&this.q[this.q.length-1]<=value){
        this.q.pop()
    }
    this.q.push(value)
    return null
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.list.length===0)return -1
    let ans=this.list.shift()
    if(ans===this.q[0]){
        this.q.shift()
    }
    return ans
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */