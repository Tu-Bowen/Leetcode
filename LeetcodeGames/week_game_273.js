/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
    if (num == 0) return true
    return num % 10 !== 0
};
/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
    let res=new Array(s.length).fill(0)
    for (let i = 0; i < s.length; i++) {
        let sr = startPos[0], sc = startPos[1],road=0
        for (let j = i; j < s.length; j++) {
            if (s[j] === "U") {
                sr--
            }
            if (s[j] === "D") {
                sr++
            }
            if (s[j] === "R") {
                sc++
            }
            if (s[j] === "L") {
                sc--
            }
            if (sc < 0 || sc > n - 1 || sr < 0 || sr > n - 1) {
                break
            }
            road++
        }
        res[i]=road
    }
    return res
};
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function (arr) {
    let cnt = new Map(), totle = new Map(), res = new Array(arr.length).fill(0)
    for (let i = 0; i < arr.length; i++) {
        if (cnt.has(arr[i]) && totle.has(arr[i])) {
            res[i] = res[i] + (i * cnt.get(arr[i]) - totle.get(arr[i]))
        }
        cnt.set(arr[i], cnt.has(arr[i]) ? cnt.get(arr[i]) + 1 : 1)
        totle.set(arr[i], totle.has(arr[i]) ? totle.get(arr[i]) + i : i)
    }
    cnt.clear()
    totle.clear()
    for (let i = arr.length - 1; i >= 0; i--) {
        if (cnt.has(arr[i]) && totle.has(arr[i])) {
            res[i] = res[i] + (totle.get(arr[i]) - i * cnt.get(arr[i]))
        }
        cnt.set(arr[i], cnt.has(arr[i]) ? cnt.get(arr[i]) + 1 : 1)
        totle.set(arr[i], totle.has(arr[i]) ? totle.get(arr[i]) + i : i)
    }
    return res
};
executeInstructions(3,[0,1],"RRDDLU")