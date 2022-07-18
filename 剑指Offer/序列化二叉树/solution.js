// var serialize = function (root) {
//     return rserialize(root, '')
// };
// var rserialize = function (root, str) {
//     if (root === null) {
//         str += 'None,'
//     } else {
//         str += root.val + ','
//         rserialize(root.left, str)
//         rserialize(root.right, str)
//     }
//     return str
// }

// var deserialize = function (data) {
//     let s = data.split(',')
//     return rdeserialize(s)
// };
// var rdeserialize = function (data) {
//     if (data[0] === 'None') {
//         data.shift()
//         return null
//     }
//     let nd = new TreeNode(parseInt(data[0]))
//     data.shift()
//     nd.left = rdeserialize(data)
//     nd.right = rdeserialize(data)
//     return nd
// };
var serialize = function(root) {
    return rserialize(root, '');
};

var deserialize = function(data) {
    const dataArray = data.split(",");
    return rdeserialize(dataArray);
};

const rserialize = (root, str) => {
    if (root === null) {
        str += "None,";
    } else {
        str += root.val + '' + ",";
        str = rserialize(root.left, str);
        str = rserialize(root.right, str);
    }
    return str;
}

const rdeserialize = (dataList) => {
    if (dataList[0] === "None") {
        dataList.shift();
        return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = rdeserialize(dataList);
    root.right = rdeserialize(dataList);

    return root;
}