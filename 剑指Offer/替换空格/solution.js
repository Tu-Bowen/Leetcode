/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    //let len = s.length
    let a=s.split("")
    for (let i = 0; i < a.length; i++) {
        if(a[i]===" "){
            a[i]="%20"
        }
    }
    //console.log(a.join(""))
    a.join("")
};
replaceSpace("We are happy.")