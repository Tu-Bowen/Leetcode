/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
 var replaceSpaces = function(S, length) { 
     return S.substr(0,length).replace(/ /g,"%20")
};

console.log(replaceSpaces("Mr John Smith    ",13))