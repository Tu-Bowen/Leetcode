/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
    let left = 0, right = 0, res = 0
    let bits
    if (num < 0) {
        num = num >>> 0                               // 负数位运算，转换成10进制整数
    }
    bits = parseInt(num).toString(2) + '0'
    console.log(bits.length)
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === '0') {
            res = Math.max(res, left + right + 1)
            left = right;
            right = 0
        } else {
            right = right + 1;
        }
    }
    return res
};
console.log(reverseBits(-1))