/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
    let newstr = "";
    for (let i = 0; i < S.length;i++) {
        let nums = 1;
        if(i===S.length-1){
            newstr=newstr+S[i]+1;
            continue;
        }
        while (i >= 0 && i < S.length-1 && S[i] === S[i + 1]) {
            console.log(S[i],nums)
			nums++;
            i++;
        }
        newstr=newstr+S[i]+nums;
    }
    return newstr.length<S.length?newstr:S;
};
compressString("abbccd")