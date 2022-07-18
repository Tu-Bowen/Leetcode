/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
    let cur ,pb=n-1,pa=m-1,totle = m+n-1
    while(0<=pa||pb>=0){
        if(pa<0){
            cur = B[pb]
            pb--
        }
        else if(pb<0){
            cur = A[pa]
            pa--
        }
        else if(A[pa]>B[pb]){
            cur = A[pa]
            pa--
        }else {
            cur = B[pb]
            pb--
        }
        A[totle]=cur
        totle--
    }
};
let ko= [1,2,3,0,0,0]
let pp=[2,5,6]
