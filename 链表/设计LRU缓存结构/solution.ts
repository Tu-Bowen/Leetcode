/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
 export function LRU(operators: number[][], k: number): number[] {
    let LRUobj:Object={},queue:Array<number>=[];
    // write code here
    let row=operators.length;
    let res:Array<number>=[];
    for(let i=0;i<row;i++){

        //console.log(queue)
        if(operators[i][0]==1){//设置值
            if(Object.keys(LRUobj).length+1>k){
                delete LRUobj[queue[0]]
                queue.shift()
            }
            if(!LRUobj.hasOwnProperty(operators[i][1]))
            queue.push(operators[i][1])
            else
            queue.unshift(operators[i][1])
            LRUobj[operators[i][1]]=operators[i][2];
        }
        if(operators[i][0]==2){//读取值
            if(LRUobj.hasOwnProperty(operators[i][1])){
                //console.log(LRUobj)
                res.push(LRUobj[operators[i][1]]);
                let index=queue.indexOf(operators[i][1]);
                if(index!=-1)
                queue.splice(index,1);
                queue.push(operators[i][1]);
            }else{
                res.push(-1);
            }
        }
    }
    //console.log(res);
    return res
}

let arr=[[1,1,1],[1,2,2],[1,3,2],[2,1],[1,4,4],[2,2]];

LRU(arr,3);