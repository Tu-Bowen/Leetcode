/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var delZero=function(s){
     let reg=/\b0+/gi
     let str=s.replace(reg,"")
     return str===""?0:parseInt(str)
 }
 var compareVersion = function(version1, version2) {
     let ver1=version1.split("."),ver2=version2.split(".")
     let i=0,j=0
     while(i<ver1.length||j<ver2.length){
         let num1=ver1[i]?delZero(ver1[i]):0,num2=ver2[j]?delZero(ver2[j]):0
         if(num1===num2){
             i++
             j++
             continue 
        }
        if(num1>num2){
            return 1
        }else{
            return -1
        }
     }   
     return 0
};
console.log(compareVersion("1.0.1","1"))