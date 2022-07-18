/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
 var oneEditAway = function(first, second) {
     const nf=first.length,ns=second.length;
     if(first==second)return true;
     if(Math.abs(nf-ns)>1)return false
     let flag = (nf===ns)?0:(nf-ns),num=0;
     let f = 0,s = 0;
     while(f<nf&&s<ns){
        //console.log(f,s,first[f],second[s],flag,num)
         if(first[f]===second[s]){
             f++;
             s++;
         }else{
             num++
             if(num===2)return false
             if(flag==0)f++,s++;
             if(flag==1)f++;
             if(flag==-1)s++;
         }
     }
     return true
};

const a="teecher",b="teacher"
console.log(oneEditAway(a,b))