# 修改this指向

函数的bind,call,apply方法都可以实现修改函数this的操作

**区别**


apply:会**直接调用函数执行**，第一个参数是调用时的this，**第二个参数是个数组，里面的元素是调用时传给函数的参数。**

call:也**会直接掉用函数执行**，第一个参数是调用时的this，**第二个以及以后的参数是调用时传递的参数，记住这个可不是数组**

bind:不会直接调用，会返回一个函数，这个函数执行时的this是传递给bind的参数

**********

题目来自牛客网
https://www.nowcoder.com/practice/a616b3de81b948fda9a92db7e86bd171?tpId=2&&tqId=10851&rp=1&ru=/activity/oj&qru=/ta/front-end/question-ranking