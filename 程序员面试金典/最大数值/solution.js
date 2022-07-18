/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var maximum = function(a, b) {
     let mid = (a+b)/2
     return mid + Math.abs(a-mid)
};

var _maximum = (a,b)=>{
    const i = (a-b+"")[0]
    const map = {
        '-': a,
        '0': b,
        '1': b,
        '2': b,
        '3': b,
        '4': b,
        '5': b,
        '6': b,
        '7': b,
        '8': b,
        '9': b,
    }
    return map[i]
}