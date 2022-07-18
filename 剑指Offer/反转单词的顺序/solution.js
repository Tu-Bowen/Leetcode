/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function (s) {
    let reverse_=a=>{
        let i=0,j=a.length-1
        while(i<j){
            [a[i],a[j]]=[a[j],a[i]]
            i++,j--
        }
        return a
    }
    return reverse_(s.trim().split(/\s+/)).join(" ")
}; 
console.log(reverseWords("the sky is blue"))
console.log("  sada  asda  ".trim().split(" "))
console.log("  sada  asda  ".trim().split(/\s+/))
