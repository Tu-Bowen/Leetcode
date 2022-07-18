/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
	let  len1=s1.length,len2=s2.length;
	if(len1!=len2){
		return false;
	}
	return (s2+s2).indexOf(s1)!=-1
};