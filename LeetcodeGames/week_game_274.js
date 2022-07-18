/**检查是否所有A都在B之前
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    let f = true
    for (let i = 0; i < s.length; i++) {
        if (!f && s[i] === 'a') return false
        if (s[i] === 'b') {
            f = false
        }
    }
    return true
};

/**
 * 银行中的激光束数量
 * @param {string[]} bank
 * @return {number}
 */
 var numberOfBeams = function (bank) {
    let m = bank.length, n = bank[0].length, lights = []
    for (let i = 0; i < m; i++) {
        let litNums = 0
        for (let j = 0; j < n; j++) {
            if (bank[i][j] === "1") {
                litNums++
            }
        }
        lights.push(litNums)
    }
    let res=0,pre = 0
    for (let i = 0; i < m; i++) {
        if(lights[i]!==0){
            res+=lights[i]*pre
            pre=lights[i]
        }
    }
    return res
};
/**
 * 摧毁小行星
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
 var asteroidsDestroyed = function(mass, asteroids) {
     asteroids.sort((a,b)=>{
         return a-b
     })
     for(let i=0;i<asteroids.length;i++){
         if(asteroids[i]>mass)return false
         mass+=asteroids[i]
     }
     return true
};
/**
 * 参加会议的最多员工数
 * @param {number[]} favorite
 * @return {number}
 */
 var maximumInvitations = function(favorite) {

};