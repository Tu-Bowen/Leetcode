/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
 var findString = function(words, s) {
    let left=0,right=words.length-1,len=words.length
    while(left<=right){
        while(left<=right&&words[left] === '')left++
        while(left<=right&&words[right] === '')right--
        let mid =left + parseInt((right - left)/2)
        console.log(words[left],words[right])
        while(words[mid] == '' &&mid<right){
            mid++
        }
        if(s==words[mid]){
            return mid
        }else if(s>words[mid]){
            left = mid + 1;
        }else if(s<words[mid]){
            right = mid -1;
        }
    }
    return -1
};
 
var words =["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""]
var s="ball"
console.log("bt"<"ball")

