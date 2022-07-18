# 计算器


https://leetcode-cn.com/problems/calculator-lcci/


使用一个栈，sign表示在此之前的运算符，n是在此之前累计的数。
注意：
1. 等于length的循环是为了把最后一个运算符计算进去
2. 处理负数的时候，floor取得是小于当前负数的值，trunc取的是去掉小数点的值，这道题使用trunc