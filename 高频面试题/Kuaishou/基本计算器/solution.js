/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function (s) {
    s.trim()
    let stack = [], lastChar = "+", num = 0
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(Number(s[i])) && s[i] !== " ") {
            num = num * 10 + Number(s[i])
        }
        if (isNaN(Number(s[i]))||i===s.length-1) {
            switch (lastChar) {
                case '*':
                    stack.push(stack.pop() * num)
                    break
                case '/':
                    stack.push(Math.trunc(stack.pop() / num))
                    break
                case '+':
                    stack.push(num)
                    break
                case "-":
                    stack.push(-num)
                    break
            }
            lastChar=s[i]
            num=0
        }
    }
    let ans=0
    for(let i=0;i<stack.length;i++)ans=ans+stack[i]
    return ans
};
console.log(calculate("3/2"))
console.log(Math.round(3/2))