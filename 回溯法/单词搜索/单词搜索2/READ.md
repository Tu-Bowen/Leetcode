# 单词搜索2

力扣：https://leetcode-cn.com/problems/word-search-ii/

**思路一：**
死亡暴力法，直接用单词搜索1的方法循环监测每一个words数组中的字符串


**思路二：**

1.将字符串数组转化为一个字典树

2.dfs(i,j,root)表示搜索从数组下标为i，j的元素开始搜索，是否可以找到root的children中的一条匹配的字典链表

3.dfs函数中访问过的节点标记为#，节点中的word属性表示当前到节点拼起来的字符串，搜索到了就需要制空防止重复计算

4.这一步操作是为了释放掉无用的字典链表节点，提升效率
```
        if(Object.keys(cldnode.children).length==0){
            delete root.children[c]
        }
```
