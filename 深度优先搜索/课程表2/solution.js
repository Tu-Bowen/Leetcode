/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
     let rudu=new Array(numCourses).fill(0)
     let edge=new Array(numCourses)
     let res=new Array(numCourses)
     let queue=new Array()
     for(let i=0;i<numCourses;i++){
         edge[i]=new Array()
     }
     for(let i=0;i<prerequisites.length;i++){
         let start=prerequisites[i][0],end=prerequisites[i][1]
         edge[end].push(start)
         rudu[start]++
     }
     for(let i=0;i<numCourses;i++){
         if(rudu[i]===0){
             queue.push(rudu[i])
         }
     }
     while(queue.length!==0){
         let u=queue.shift()
         res.push(u)
         for(let i=0;i<edge[u].length;i++){
             let c=edge[u][i]
             rudu[c]--
             if(rudu[c]===0){
                 queue.push(c)
             }
         }
     }
     if(res.length!==numCourses)return []
     return res
};