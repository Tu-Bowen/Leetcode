/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
    const even = 0x55555555
    const odd = 0xaaaaaaaa
    console.log(((num&even)<<1).toString(2))
    console.log(((num&odd)>>1).toString(2))
    return ((num&even)<<1) | ((num&odd)>>1)
};
exchangeBits(3)
/**
 * 0xaaaaaaaa = 10101010101010101010101010101010 (偶数位为1，奇数位为0）
 * 0x55555555 = 1010101010101010101010101010101 (偶数位为0，奇数位为1）
 * 0x33333333 = 110011001100110011001100110011 (1和0每隔两位交替出现)
 * 0xcccccccc = 11001100110011001100110011001100 (0和1每隔两位交替出现)
 * 0x0f0f0f0f = 00001111000011110000111100001111 (1和0每隔四位交替出现)
 * 0xf0f0f0f0 = 11110000111100001111000011110000 (0和1每隔四位交替出现)
 */ 