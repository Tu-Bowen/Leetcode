# 单词搜索

力扣：https://leetcode-cn.com/problems/word-search/

dfs(k,i,j)表示从下标为i，j开始搜索，看是否可以在二维数组中找到匹配的字符串，k是目标字符串的下标

mark表示下表为i，j的节点是否被访问过

point表示当前节点周围的四个方向

如果下表为i，j的节点不等于k下标，那么返回false，否则如果k指向末尾了就返回true，不然继续四个方向判断递归


**整体思路**回溯法