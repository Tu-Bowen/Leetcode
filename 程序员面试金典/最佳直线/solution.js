/**
 * @param {number[][]} points
 * @return {number[]}
 */
var bestLine = function (points) {
    var res = new Array(2), maxCnt = 2
    res[0]=0,res[1]=1
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            let x1 = points[i][0] - points[j][0]
            let y1 = points[i][1] - points[j][1]
            let cnt = 2
            for (let k = j + 1; k < points.length; k++) {
                let x2 = points[i][0] - points[k][0]
                let y2 = points[i][1] - points[k][1]
                if (x1 * y2 == x2 * y1) {
                    cnt++
                }
            }
            //console.log(cnt,maxCnt,i,j)
            if (cnt > maxCnt) {
                maxCnt = cnt
                res[0] = i
                res[1] = j
            }
        }
    }
    //console.log(res)
    return res
};
bestLine([[-3320,51525],[-2214,-4833],[2400,13565]])