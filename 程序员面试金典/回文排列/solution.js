/**
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function(s) {
     const arrstr=s.split('')
     arrstr.sort()
     let obj={}
     for(let i=0;i<arrstr.length;i++){
        //if(arrstr[i]===arrstr[j]){
        //    obj["arr"]
        // }
        obj[arrstr[i]]=obj[arrstr[i]]?obj[arrstr[i]]+1:1;
     }
     const arr=Object.values(obj)
     let num=0,flag=true;
     console.log(arr)
     arr.forEach(item=>{
         //console.log(item)
         if((item/2)!=parseInt(item/2)){
             num++
         }
         if(num>1){
             flag=false
         }
     })
     return flag;
};

console.log(canPermutePalindrome("code"))