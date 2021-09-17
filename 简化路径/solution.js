/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let patharr = path.split('/'), stack = [];
    patharr.forEach((item) => {
        if (item == '.' || item == '') {//continue;
         } else if (item == '..') {
            stack.pop()
        } else {
            stack.push(item)
        }
    })
    return `/${stack.join('/')}`
};




