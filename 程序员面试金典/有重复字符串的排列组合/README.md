# 有重复字符串的排列组合

https://leetcode-cn.com/problems/permutation-ii-lcci/

把S换成字符数组，然后排序，如果当前字符和前一个字符相等，且前一个字符在之前的位置并没有被选择过，那么当前位置就不能放这个字符，
其他一样回溯