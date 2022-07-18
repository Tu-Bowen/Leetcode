/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let n = ratings.length, left = new Array(n)
    for (let i = 0; i < n; i++) {
        if (i !== 0 && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1
        } else {
            left[i] = 1
        }
    }
    // console.log(left)
    let right = 1,res=0
    for (let i = n - 1; i >= 0; i--) {
        if (i !== n - 1 && ratings[i] > ratings[i + 1]) {
            right++
        } else {
            right = 1
        }
        res+=Math.max(left[i],right)
    }
    return res
};
candy([1,0,2])