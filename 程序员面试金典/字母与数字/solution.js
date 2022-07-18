/**
 * @param {string[]} array
 * @return {string[]}
 */
var findLongestSubarray = function (array) {
    let n = array.length, s = new Map(),numCount=0,aCount=0,len=0,start=0
    s.set(0,-1)//特殊情况，如果start从0开始统计到end是最终答案，那么需要使用s[0]
    for (let i = 0; i < n; i++) {
        if('0'.charCodeAt()<=array[i].charCodeAt(0)&&array[i].charCodeAt(0)<='9'.charCodeAt()){
            numCount++
        }else{
            aCount++
        }
        const diff=aCount-numCount
        //console.log(s[diff],s.has(diff))//
        if(!s.has(diff))s.set(diff,i)//
        else if(i-s.get(diff)>len){
            len=i-s.get(diff)
            start=s.get(diff)+1/**+1是为了去掉当前元素，应为s[diff]是数量差为diff的下标，是包括这个下标的，所以截取的时候应该往后截取一个 */
        }
    }
    //console.log(start,start+len)
    // console.log(s)
    return array.slice(start,start+len)
};

var _findLongestSubarray = function (array) {
    let sum = 0
    const map = new Map()
    let front = 0, last = 0
    map.set(0, -1)
    array.forEach((item, index) => {
        sum += (array[index][0] >= 'A' && array[index][0] <= 'z' ? 1 : -1)
        if (map.has(sum)) {
            if (index - map.get(sum) > last - front) {
                last = index
                front = map.get(sum)
            }
        } else {
            map.set(sum, index)
        }
    })
    //console.log(map)
    console.log(front,last)
    return array.slice(front + 1, last + 1)
};

//start 20 len 66
console.log(findLongestSubarray(["42","10","O","t","y","p","g","B","96","H","5","v","P","52","25","96","b","L","Y","z","d","52","3","v","71","J","A","0","v","51","E","k","H","96","21","W","59","I","V","s","59","w","X","33","29","H","32","51","f","i","58","56","66","90","F","10","93","53","85","28","78","d","67","81","T","K","S","l","L","Z","j","5","R","b","44","R","h","B","30","63","z","75","60","m","61","a","5","S","Z","D","2","A","W","k","84","44","96","96","y","M"]))

/**
 * Map {
  0 => -1,
  -1 => 0,
  -2 => 1,
  1 => 4,
  2 => 5,
  3 => 6,
  4 => 7,
  5 => 12,
  6 => 19,
  7 => 20,
  8 => 31,
  9 => 32,
  10 => 39,
  11 => 42,
  12 => 93
}
 */

/**
 * Map {      
  '0': -1, 
  '1': 4,  
  '2': 5,  
  '3': 6,  
  '4': 7,  
  '5': 8,  
  '6': 9,  
  '7': 12, 
  '8': 17, 
  '9': 18, 
  '10': 19,
  '11': 20,
  '12': 31,
  '13': 32,
  '14': 33,
  '15': 38,
  '16': 39,
  '17': 42,
  '18': 73,
  '19': 76,
  '20': 77,
  '21': 92,
  '22': 93,
  '23': 98,
  '24': 99,
  '-1': 2,
  '-2': 1
}
 */