let stacks,arr
/**
 * @param {number} stackSize
 */
 var TripleInOne = function(stackSize) {
     stacks = new Array(3*stackSize)
     size = stackSize
     arr=[{
         idx:-1,
         start:0,
         end:stackSize-1
     },
     {
         idx:stackSize-1,
         start:stackSize,
         end:2*stackSize-1
     },
     {
         idx:2*stackSize-1,
         start:2*stackSize,
         end:3*stackSize-1
     }]
};
/** 
 * @param {number} stackNum 
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
    if(arr[stackNum].idx<arr[stackNum].end){
        arr[stackNum].idx++
        stacks[arr[stackNum].idx]=value
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    return null
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {
    const i = arr[stackNum].idx
    if(i<arr[stackNum].start)return -1
    arr[stackNum].idx--
    return stacks[i]
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
    if(arr[stackNum].idx===arr[stackNum].start-1)return -1
    return stacks[arr[stackNum].idx]
};

/** 
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
    return arr[stackNum].idx===arr[stackNum].start-1
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */