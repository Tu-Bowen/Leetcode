/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    var visited = new Array(numCourses).fill(0)
    var edge = new Array(numCourses)
    var flag = true
    for (let i = 0; i < numCourses; i++) {
        edge[i]=new Array()
    }
    var flag = true
    var dfs = function (idx) {
        visited[idx] = 1
        var next = edge[idx]
        for (let i = 0; i < next.length; i++) {
            if (visited[next[i]]===0) {
                dfs(next[i])
                if (!flag) 
                return
            } else if(visited[next[i]]===1){
                flag = false
                return
            }
        }
        visited[idx]=2
    }
    for (let i = 0; i < prerequisites.length; i++) {
        let start = prerequisites[i][0], end = prerequisites[i][1]
        edge[start].push(end)
    }
    for (let i = 0; i < numCourses && flag; i++) {
        if (visited[i]===0) {
            dfs(i)
        }
    }
    return flag
};
