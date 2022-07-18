#  寻找旋转数组中的最小值2

https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/

1、和right指向的数相比

2、如果 mid<right 那么 right=mid

3、如果 mid>right 那么 left=mid+1

4、注意：如果mid ==right那么无法准确判断最小值的位置，right--