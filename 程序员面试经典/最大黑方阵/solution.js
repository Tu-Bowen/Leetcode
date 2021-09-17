/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findSquare = function (matrix) {
    let res=new Array(3).fill(-1);
    let row = matrix.length;
    if (row == 0) return  []
    let col = matrix[0].length;
    let dpi = new Array();//上边连续的黑色方块
    let dpj = new Array();//左边连续的黑色方块
    for(let i=0;i<row;i++){
        dpi.push(new Array(col).fill(0));
        dpj.push(new Array(col).fill(0));
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 0) {
                if (i != 0) { dpi[i][j] = dpi[i - 1][j] + 1 }
                else { dpi[i][j] = 1 }
                if (j != 0) { dpj[i][j] = dpj[i][j - 1] + 1 }
                else { dpj[i][j] = 1 }

                //判断边长
                let len=Math.min(dpi[i][j],dpj[i][j])

                while(len>res[2]){
                    if(dpj[i-len+1][j]>=len&&dpi[i][j-len+1]>=len){

                        //console.log(i,j,len)
                        //console.log(dpj[i-len+1][j],dpi[i][j-len+1])
                    
                        res[2]=len
                        res[1]=j-len+1
                        res[0]=i-len+1
                        break;
                    }
                    len--;
                }

            }
        }
    }
    //console.log("dpi",dpi)
    //console.log("dpj",dpj)
    //console.log("res",res)
    if(res[0]==-1)return []
    return res
};

const arr = [
    [1,0,1],
    [0,0,1],
    [0,0,1]
 ]

findSquare(arr)