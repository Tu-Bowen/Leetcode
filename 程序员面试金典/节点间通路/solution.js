/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
 var findWhetherExistsPath = function(n, graph, start, target) {
     const vist = new Set(),to = new Array(n)
     for(let i=0;i<n;i++){
         to[i]=new Set()
     }
     const dfs = (cur)=>{
         if(cur===target)return true
         if(vist.has(cur))return false
         vist.add(cur)
         for( x of to[cur]){
             if(dfs(x)){
                 return true
             }
         }
         return false
     }
     for(let i=0;i<graph.length;i++){
         to[graph[i][0]].add(graph[i][1])
     }
     return dfs(start)
};