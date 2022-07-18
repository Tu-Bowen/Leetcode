# 马戏团人塔

https://leetcode-cn.com/problems/longest-increasing-subsequence

先按照height**升序**排序，然后height一样，就按照wight**倒序**排序
(因为如果height是一样的是不能放在下面的，又由于weight的限制，所以小体重排在后面)

二分查找找的是当前重量可以放的位置，如果放在最后一个说明结果+1，如果放在前面，说明前面有更好的选择，所以无论是不是放在最后一个都要更新r下标的值