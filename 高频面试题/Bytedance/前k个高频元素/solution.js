/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let n = nums.length, q = [], m = new Map()
    for (let i = 0; i < n; i++) {
        if (m.has(nums[i])) {
            m.set(nums[i], m.get(nums[i]) + 1)
        } else {
            m.set(nums[i], 1)
        }
    }
    // console.log(m)
    m.forEach((v,key)=>{
        q.push({
            num:key,
            count:v
        })
    })
    q.sort((a,b)=>{
        return b.count-a.count
    })
    let res=[]
    for(let i=0;i<k;i++){
        res.push(q[i].num)
    }
    // console.log(q)
    return res
};
topKFrequent([3,0,1,0],1)






























// 最小堆
class MinHeap {
    constructor(data = []) {
      this.data = data;
      this.comparator = (a, b) => a[1] - b[1];
      this.heapify();
    }
    // 建堆
    heapify() {
      if (this.size() < 2) return;
      // 将每个元素插入，往上冒到合适位置
      for (let i = 1; i < this.size(); i++) {
        this.bubbleUp(i);
      }
    }
    // 获得堆顶元素
    peek() {
      if (this.size() === 0) return null;
      return this.data[0];
    }
    // 往小顶堆中插入元素
    offer(value) {
      this.data.push(value);
      // 在最后的位置插入且向上冒泡
      this.bubbleUp(this.size() - 1);
    }
    // 移除顶堆元素
    poll() {
      if (this.size() === 0) {
        return null;
      }
      const result = this.data[0];
      const last = this.data.pop();
      if (this.size() !== 0) {
        // 最末尾元素放到堆顶
        this.data[0] = last;
        // 向下调整直至放到合适位置
        this.bubbleDown(0);
      }
      return result;
    }
  
    bubbleUp(index) {
      while (index > 0) {
        // 获得父节点索引
        const parentIndex = (index - 1) >> 1;
        // 如果要调整的节点比父节点的值还要小，就需要一直往上冒
        if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
          // 交换位置往上冒
          this.swap(index, parentIndex);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    bubbleDown(index) {
      const lastIndex = this.size() - 1;
      while (true) {
        // 获得要调整的节点的左子节点和右子节点的索引
        const leftIndex = index * 2 + 1;
        const rightIndex = index * 2 + 2;
        let findIndex = index;
        // 如果左/右子节点的值小于当前要调整的节点的值
        if (
          leftIndex <= lastIndex &&
          this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
        ) {
          findIndex = leftIndex;
        }
        if (
          rightIndex <= lastIndex &&
          this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
        ) {
          findIndex = rightIndex;
        }
        // 则要交换
        if (index !== findIndex) {
          this.swap(index, findIndex);
          index = findIndex;
        } else {
          break;
        }
      }
    }
    // 交换元素
    swap(index1, index2) {
      [this.data[index1], this.data[index2]] = [
        this.data[index2],
        this.data[index1],
      ];
    }
    // 获得堆大小
    size() {
      return this.data.length;
    }
  }
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  var topKFrequent = function (nums, k) {
    let numToCount = new Map();
    for (let num of nums) {
      numToCount.set(num, (numToCount.get(num) || 0) + 1);
    }
    let minHeap = new MinHeap();
    for (let a of numToCount.entries()) {
      if (minHeap.size() < k) {
        minHeap.offer(a);
      } else if (a[1] > minHeap.peek()[1]) {
        minHeap.poll();
        minHeap.offer(a);
      }
    }
    let result = [];
    for (let a of minHeap.data) {
      result.push(a[0]);
    }
    return result;
  };