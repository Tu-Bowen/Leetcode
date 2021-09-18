#  链表相交

https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/

非常浪漫的解法：
只要我们保持一样的速度，总有一天我们可以相遇

A，B指针保持一样的速度前进，如果指向null了就换一条链表走，如果有相交的点，最终相遇的就是相交节点，没有则A=B=null。


理论基础：
如果俩链表有相交节点，则称为p（f代表节点前的路，b代表后），Apb=Bpb，交换链表走之后Apf+Apb+Bpf=Bpf+Bpb+Apf
