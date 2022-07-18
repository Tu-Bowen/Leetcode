# 交换数字

https://leetcode-cn.com/problems/swap-numbers-lcci/


任意两个数异或结果为0，任意数与0异或结果为它本身


**总结：**
* n&1==1 n为奇数

* x = x^y
  y = x^y
  x = x^y
  不使用额外空间交换两个数

* 找出出现奇数次数的数
   ```
   int find(int[] arr) {
    int tmp = arr[0];
    for(int i=1; i<arr.length; i++) {
        tmp = tmp ^ arr[i];
    }
    return tmp;
   ```

* 找出不大于N的最大的2的幂指数

  ```
  int findMax(int n) {
	n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8; // 整型一般是32位，以上述中假设的8位为例
    return (n + 1) >> 1;
    }
    ```