# 寻找旋转排序数组中最小的值

https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/


1.如果最后一个值大于第一个，那么是顺序递增

2.无论怎么旋转，只要不是顺序递增的，那么两端永远是两段顺序递增的数组，并且左边永远大于右边，我们的目标是去右边找第一个