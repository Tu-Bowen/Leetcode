/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
 var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    let nodeIn = new Array(n).fill(0)
    let nodeOut = new Array(n).fill(0)
    let edge = 0
    for (let i = 0; i < n; i++) {
        if (leftChild[i] !== -1) {
            nodeIn[leftChild[i]]++
            nodeOut[i]++
            edge++
        }
        if (rightChild[i] !== -1) {
            nodeIn[rightChild[i]]++
            nodeOut[i]++
            edge++
        }
    }
    if (edge !== n - 1) return false
    //拓扑排序
    let flag = new Array(n).fill(false),queue=[]
    for (let i = 0; i < n; i++) {
        if(nodeIn[i]===0){
            queue.push(i)
        }
    }
    while(queue.length!==0){
        let current=queue.shift()
        flag[current]=true
        if(leftChild[current]!==-1&&nodeIn[leftChild[current]]===1){
            nodeIn[leftChild[current]]--
            queue.push(leftChild[current])
        }
        if(rightChild[current]!==-1&&nodeIn[rightChild[current]]===1){
            nodeIn[rightChild[current]]--
            queue.push(rightChild[current])
        }
    }
    for(let i=0;i<n;i++){
        if(!flag[i]){
            return false
        }
    }
    return true
};