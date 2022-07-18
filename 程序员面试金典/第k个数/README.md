# 第k个数
https://leetcode-cn.com/problems/get-kth-magic-number-lcci/


三个指针，分别指向的是乘3，5，7的数，结果记录为a,b,c，每次求结果，取其中最小的，如果最小的和a，b，c中的值相等，那么需要向后移动相等的指针，有可能不止一个