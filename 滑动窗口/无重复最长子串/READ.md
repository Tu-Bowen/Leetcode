# 无重复字符的最长子串

力扣：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

**思路**
滑动窗口

内循环右指针不断向右，直到和左指针一样时，左指针右移一位并弹出set一个元素
