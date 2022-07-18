/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function (solution, guess) {
    let ans = [0, 0], s1 = new Map(), s2 = new Map()
    for (let i = 0; i < solution.length; i++) {
        if (solution[i] == guess[i]) {
            ans[0]++
            continue
        }
        if (s1.has(solution[i])) {
            s1.set(solution[i], s1.get(solution[i]) + 1)
        } else {
            s1.set(solution[i], 1)
        }
        if (s2.has(guess[i])) {
            s2.set(guess[i], s2.get(guess[i]) + 1)
        } else {
            s2.set(guess[i], 1)
        }
    }
    s2.forEach((v,k)=>{
        if(s1.has(k)&&s2.has(k))
        ans[1]+=Math.min(s1.get(k),s2.get(k))
    })
    return ans
    //console.log(ans)
};
let solution="RGRB",guess="BBBY"
console.log(masterMind(solution,guess))