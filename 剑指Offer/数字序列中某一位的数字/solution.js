/**
 * @param {number} n
 * @return {number}
 */
 var findNthDigit = function(n) {
     let start=1,digit=1,count=9
     while(n>count){
         n=n-count
         digit=digit+1
         start=start*10
         count=start*9*digit
     }
     let num=Math.floor((n-1)/digit)+start
     num=num+''
     return num[(n-1)%digit]
};
console.log(findNthDigit(10000))