/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    stack.getTop=function (){
        return this[this.length-1]
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        }else{
            if(
                (s[i]===')'&&stack.getTop()==='(')||
                (s[i]==='}'&&stack.getTop()==='{')||
                (s[i]===']'&&stack.getTop()==='[')
                ){
                    console.log(s[i],stack.getTop())
                    stack.pop()
            }else{
                console.log(s[i],stack.getTop())
                return false
            }
        }
    }
    return stack.length===0
};
isValid("((")