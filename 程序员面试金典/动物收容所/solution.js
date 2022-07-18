//这也超时，我人麻了
// var AnimalShelf = function() {
//     this.queue=[]
//     this.catqueue=[]
//     this.dogqueue=[]
// };

// /** 
//  * @param {number[]} animal
//  * @return {void}
//  */
// AnimalShelf.prototype.enqueue = function(animal) {
//     const obj={animal,status:true}
//     this.queue.push(obj)
//     if(animal[1]===0)this.catqueue.push(obj)
//     else this.dogqueue.push(obj)
// };

// /**
//  * @return {number[]}
//  */
// AnimalShelf.prototype.dequeueAny = function() {
//     while(this.queue.length!==0&&!this.queue[0].status)this.queue.shift()
//     if(!this.queue.length)return [-1,-1]
//     const i=this.queue.shift() 
//     console.log(this.queue)
//     if(i.animal[1]===0&&i.status)this.catqueue.shift()
//     else this.dogqueue.shift()
//     return i.animal
// };

// /**
//  * @return {number[]}
//  */
// AnimalShelf.prototype.dequeueDog = function() {
//     if(this.dogqueue.length===0)return [-1,-1]
//     const i=this.dogqueue.shift()
//     i.status=false
//     return i.animal
// };

// /**
//  * @return {number[]}
//  */
// AnimalShelf.prototype.dequeueCat = function() {
//     if(this.catqueue.length===0)return [-1,-1]
//     const i=this.catqueue.shift()
//     i.status=false
//     return i.animal
// };

// /**
//  * Your AnimalShelf object will be instantiated and called as such:
//  * var obj = new AnimalShelf()
//  * obj.enqueue(animal)
//  * var param_2 = obj.dequeueAny()
//  * var param_3 = obj.dequeueDog()
//  * var param_4 = obj.dequeueCat()
//  */


// let a= new AnimalShelf()
// a.enqueue([0,0])
// a.enqueue([1,0])
// a.dequeueCat()
// //console.log(a.queue)
// //console.log(a.catqueue)
// a.dequeueDog()
// a.dequeueAny()

var AnimalShelf = function() {
    this.animals = []
  };
  
  /** 
   * @param {number[]} animal
   * @return {void}
   */
  AnimalShelf.prototype.enqueue = function(animal) {
     this.animals.push(animal)
  };
  
  /**
   * @return {number[]}
   */
  AnimalShelf.prototype.dequeueAny = function() {
    if(this.animals.length === 0) return [-1, -1]
    return this.animals.shift()
  };
  
  /**
   * @return {number[]}
   */
  AnimalShelf.prototype.dequeueDog = function() {
    let i = 0
    let len = this.animals.length
    while(i < len && this.animals[i][1] !== 1){
      i++
    }
    if(i >= len){
      return [-1, -1]
    }
    return this.animals.splice(i, 1)[0]
  };
  
  /**
   * @return {number[]}
   */
  AnimalShelf.prototype.dequeueCat = function() {
    let i = 0
    let len = this.animals.length
    while(i < len && this.animals[i][1] !== 0){
      i++
    }
    if(i >= len){
      return [-1, -1]
    }
    return this.animals.splice(i, 1)[0]
  };
  
  /**
   * Your AnimalShelf object will be instantiated and called as such:
   * var obj = new AnimalShelf()
   * obj.enqueue(animal)
   * var param_2 = obj.dequeueAny()
   * var param_3 = obj.dequeueDog()
   * var param_4 = obj.dequeueCat()
   */