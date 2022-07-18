/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
     let m=new Map(),n=digits.length,res=[]
     m.set('2',['a','b','c'])
     m.set('3',['d','e','f'])
     m.set('4',['g','h','i'])
     m.set('5',['j','k','l'])
     m.set('6',['m','n','o'])
     m.set('7',['p','q','r','s'])
     m.set('8',['t','u','v'])
     m.set('9',['w','x','y','z'])
     function dfs(idx,str){
         if(digits[idx]==='1')return
         if(idx===n){
             res.push(str.join(''))
         }
         let arrs=m.get(digits[idx])
         for(let i=0;i<arrs.length;i++){
             dfs(idx+1,[...str])
         }
     }
     dfs(0,[])
     return res
};