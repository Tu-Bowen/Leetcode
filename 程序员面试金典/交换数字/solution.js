//不使用额外变量交换数组中两个元素
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
 var swapNumbers = function(numbers) {
     numbers[0]^=numbers[1]
     numbers[1]^=numbers[0]
     numbers[0]^=numbers[0]
     return numbers
};