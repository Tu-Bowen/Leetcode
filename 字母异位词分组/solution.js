/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams_ = function(strs) {
     let res=[],map=new Map()
     for(let i=0;i<strs.length;i++){
         const strarr= Array.from(strs[i]);
         strarr.sort();
         const str=strarr.toString();
         let list=map.get(str)?map.get(str):[];
         list.push(strs[i]);
         map.set(str,list)
     }
     map.forEach((v,k)=>{
         res.push(v)
     })
     console.log(res)
     return res
};


var groupAnagrams = function(strs) {
    let obj={};
    for(let i=0;i<strs.length;i++){
        const str=strs[i];
        let count=new Array(26).fill(0)
        for(let j=0;j<str.length;j++){
            count[(str[j].charCodeAt()-'a'.charCodeAt())]++
        }
        let list=obj[count]?obj[count]:[];
        list.push(str);
        obj[count]=list;
    }
    console.log(Object.values(obj))
    return Object.values(obj)
};


const str=["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(str)