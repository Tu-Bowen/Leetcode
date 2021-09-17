#  盛最多水的容器

力扣：https://leetcode-cn.com/problems/container-with-most-water/

1.左右指针从两头开始

2.那边柱子低移动那边的指针（我用循环也差不多）

3.直到俩相遇，返回循环已经比对过的最小容器容积



原理：
如果移动高的那个

原始：min(x,y)*t

之后：min(x,y1)*t1

t1 < t 且 min(x,y1) <= min(x,y)

所以一定比之前小

