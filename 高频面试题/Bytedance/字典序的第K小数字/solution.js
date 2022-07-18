/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
    let getCount = function (prefix, n) {
        let count = 0
        for (let cur = prefix, next = prefix + 1; cur <= n; cur = cur * 10, next = next * 10) {
            count = count + Math.min(n + 1, next) - cur
        }
        return count
    }
    let num = 1, prefix = 1
    while (num < k) {
        let count = getCount(prefix,n)
        if (num + count <= k) {
            num += count
            prefix = prefix + 1
        } else {
            num += 1
            prefix = prefix * 10
        }
    }
    return prefix
};
console.log(findKthNumber(20, 2))
