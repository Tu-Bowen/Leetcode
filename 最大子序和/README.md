# 最大子序和


https://leetcode-cn.com/problems/maximum-subarray/


cur是数组累计的和，如果cur大于0，那么可以继续累计
如果小于0，那么cur直接取当前遍历的值，并且移动标记开始的指针指向当前元素，
如果cur大于之前的最大和，那么重新赋值最大和，并移动结束指针指向当前元素

这样就可以得到最大子序和的同时，得到相应的开始与结束的下标了