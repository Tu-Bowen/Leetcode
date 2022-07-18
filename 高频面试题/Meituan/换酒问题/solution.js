/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    let res=0,empty=0
    while(numBottles!==0){
        let a=numBottles
        res=res+numBottles
        numBottles=Math.floor((empty+numBottles)/numExchange)
        empty=(empty+a)%numExchange
        // console.log(numBottles,empty)
    }
    return res
};