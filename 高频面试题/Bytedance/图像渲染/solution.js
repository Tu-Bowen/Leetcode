/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    let basicColor = image[sr][sc]
    let m = image.length
    let n = image[0].length
    function dfs(x, y) {
        if (x < 0 || y < 0 || x > m - 1 || y > n - 1 || image[x][y] !== basicColor || image[x][y] === newColor)
            return
        image[x][y] = newColor
        dfs(x - 1, y)
        dfs(x + 1, y)
        dfs(x, y - 1)
        dfs(x, y + 1)
    }
    if (basicColor !== newColor)
        dfs(sr, sc)
    return image
};