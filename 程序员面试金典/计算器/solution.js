/**
 * @param {string} s
 * @return {number}
 */

 var _calculate = function(s) {
    var num=[],cha=[]
    var getNumber =(idx)=>{
        let res=""
        while(idx<s.length&&48<=s.charCodeAt(idx)&&s.charCodeAt(idx)<=57){
            res+=s[idx]
            idx++
        }
        return [parseInt(res),idx]
    }
    for(let i=0;i<s.length;i++){
       if(s[i]==''||s[i]==' ')continue
        if(s[i]=='*'){
            i++
            while(s[i]==''||s[i]==' ')i++
            let [n,idx]=getNumber(i)
            const a =num.pop()*n
            i=idx-1
            num.push(a)
        }
        else if(s[i]=='/'){
            i++
            while(s[i]==''||s[i]==' ')i++
            let [n,idx]=getNumber(i)
            const a =Math.floor(num.pop()/n)
            i=idx-1
            num.push(a)
        }
        else if(s[i]=='+'||s[i]=='-'){
            cha.push(s[i])
        }else{
            let [n,idx]=getNumber(i)
            num.push(n)
            i=idx-1
        }
    }
    while(cha.length!=0){
       const a= num.shift(),b=num.shift(),t=cha.shift()
       const n=(t=='+'?(a+b):(a-b))
       num.unshift(n)
    }
    return num[0]
};
var calculate = function(s) {
    let stack =[],sign="+",n=0,c
    for(let i=0;i<=s.length;i++){
        //这里等于length的循环是为了把最后一个运算符计算进去
        c=s.charAt(i)
        if(c==" ")continue
        if('0'<=c&&c<='9'){
            n=10*n+parseInt(c)
            continue
        }
        if(sign=='+'){
            stack.push(n)
        }else if(sign=='-'){
            stack.push(-n)
        }else if(sign=='*'){
            stack.push(stack.pop()*n)
        }else if(sign=='/'){
            stack.push(Math.trunc(stack.pop()/n))
            //trunc和floor在这里有不同点：
            /**
             * 处理负数的时候，floor取得是小于当前负数的值
             * trunc取的是去掉小数点的值
             */
        }
        sign=c
        n=0
    }
    //console.log(stack)
    return stack.reduce((acc, n) => acc + n, 0);
};
console.log(calculate("3+5/2"))