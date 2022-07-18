/**
 * @param {number[]} square1
 * @param {number[]} square2
 * @return {number[]}
 */
 var cutSquares = function(square1, square2) {
    // 这题需要画图来计算
    // 圆心坐标
    let x1 = square1[0] + square1[2] / 2, y1 = square1[1] + square1[2] / 2;
    let x2 = square2[0] + square2[2] / 2, y2 = square2[1] + square2[2] / 2;
    if (x1 == x2) {// 垂直x轴，交点在上下边
        return [
                x1,
                Math.min(square1[1], square2[1]),
                x1,
                Math.max(square1[1] + square1[2], square2[1] + square2[2])
                ];
    }
    // y = k * x + b
    let k = (y2 - y1) / (x2 - x1);
    let b = y1 - k * x1;
    if (k >= -1 && k <= 1) {// 交点在左右边
        return [
                Math.min(square1[0], square2[0]),
                k * Math.min(square1[0], square2[0]) + b,
                Math.max(square1[0] + square1[2], square2[0] + square2[2]),
                k * Math.max(square1[0] + square1[2], square2[0] + square2[2]) + b
                ];
    }
    // 交点在上下边
    let ans = [
            (Math.min(square1[1], square2[1]) - b) / k,
            Math.min(square1[1], square2[1]),
            (Math.max(square1[1] + square1[2], square2[1] + square2[2]) - b) / k,
            Math.max(square1[1] + square1[2], square2[1] + square2[2])
            ];
    if (ans[0] < ans[2]) return ans;
    // 重排序，保证第一个点在左边
    return [ans[2], ans[3], ans[0], ans[1]];
    
};