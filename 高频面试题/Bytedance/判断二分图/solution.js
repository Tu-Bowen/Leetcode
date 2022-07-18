/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    const UNCOLORED = 0
    const RED = 1
    const GREEN = 2
    let color = new Array(graph.length).fill(UNCOLORED)
    let valid = true
    function dfs(node, c) {
        color[node] = c
        let cNei = (c === RED ? GREEN : RED)
        let lineN = graph[node]
        for (let i = 0; i < lineN.length; i++) {
            let naber = lineN[i]
            if (color[naber] === UNCOLORED) {
                dfs(naber, cNei)
                if (!valid) return
            } else if (color[naber] !== cNei) {
                // console.log("普华永道",node,naber,color[node],cNei,color[naber])
                valid = false
                return
            }
        }
    }
    for (let i = 0; i < graph.length&&valid; i++) {
        if (color[i]===UNCOLORED){
            dfs(i,RED)
        }
    }
    // console.log(color)
    return valid
};
let a=[[1,3],[0,2],[1,3],[0,2]]
isBipartite(a)