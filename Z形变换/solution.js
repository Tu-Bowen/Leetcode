/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let len = s.length;
    if (numRows == 1 || len <= numRows)
        return s;
    let restr = "";
    let group = numRows * 2 - 2
    let groupnums = (len / group) > parseInt(len / group) ? parseInt(len / group) + 1 : parseInt(len / group);

    let arrZ = new Array(len);
    for (let i = 0; i < len; i++) {
        arrZ[i] = new Array((numRows - 1) * groupnums)
    }

    let r = 0, l = 0
    for (let i = 0, g = 0; i < len && g < groupnums; g++) {

        while (r < numRows - 1 && i < len) {
            arrZ[r][l] = s[i]
            i++;
            r++;
        }
        while (r > 0 && i < len) {
            arrZ[r][l] = s[i]
            i++;
            r--;
            l++;
        }  
    }
    for(let i=0;i<arrZ.length;i++){
        for(let j=0;j<arrZ[0].length;j++){
            if(arrZ[i][j]){
                restr+=arrZ[i][j]
            }
        }
    }
    return restr
};

convert("PAYPALISHIRING", 3)