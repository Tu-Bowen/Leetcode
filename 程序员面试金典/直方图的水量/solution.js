/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let ans = 0, l = 1, r = height.length - 2, lmax = height[0], rmax = height[height.length - 1]
    while (l <= r) {
        lmax = Math.max(lmax, height[l])
        rmax = Math.max(rmax, height[r])
        if (height[l] < height[r]) {
            ans += (lmax - height[l])
            l++
        } else {
            ans += (rmax - height[r])
            r--
        }
        //console.log(ans)
        return ans
    }
};
    trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])