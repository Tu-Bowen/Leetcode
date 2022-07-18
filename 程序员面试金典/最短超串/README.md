# 最短超串

https://leetcode-cn.com/problems/shortest-supersequence-lcci/


滑动窗口
map中存储的是当前窗口big数组中和small数组不匹配的对应的字符的个数，
diff是当前窗口big数组中和small数组不匹配的字符总的个数，
如果diff为0，不断移动窗口左边界并判断满足条件的最小窗口长度，根据map判断当前字符是不是需要给diff+1