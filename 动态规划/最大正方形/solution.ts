function maximalSquare(matrix: string[][]): number {


    const row=matrix.length,col=matrix[0].length;

    
    let dp:Array<Array<number>>=new Array<Array<number>>(row)
    
    for(let i=0;i<row;i++){
        //for(let j=0;j<)
        dp[i]=new Array<number>(col);
    }

    dp[0][0]=(matrix[0][0]=="1"?1:0);

    let maxlen:number=(matrix[0][0]=="1"?1:0);

    for(let i=1;i<row;i++){
        //dp[i][0]=dp[i-1][0]+(matrix[i][0]=="1"?1:0);
        dp[i][0]=(matrix[i][0]=="1"?1:0);
        if(matrix[i][0]=="1")maxlen=1;
    }

    for(let j=1;j<col;j++){
        //dp[0][j]=dp[0][j-1]+(matrix[0][j]=="1"?1:0);
        dp[0][j]=(matrix[0][j]=="1"?1:0);
        if(matrix[0][j]=="1")maxlen=1;
    }


    for(let i=1;i<row;i++){
        for(let j=1;j<col;j++){
            //console.log(maxlen)
            if(matrix[i][j]=="1"){
                dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1;
                maxlen=Math.max(maxlen,dp[i][j]);
            }else{
                dp[i][j]=0;
            }
        }
    }


    return maxlen*maxlen;
};


let arr=
[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];

maximalSquare(arr);