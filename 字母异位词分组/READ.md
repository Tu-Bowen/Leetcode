# 字母异位词分组
**思路一**
对字符串数组中的每一项字符串进行排序，按字符字典序进行排序，最终字符异位词的排序后字符串会相同，就以此作为map中的键

**思路二**
用一个长度为26的字符来存储每一位字符出现的次数，然后用这个数组作为键来存储字母异位词的数组，**但是存储的容器不是map是对象这一点要注意！**（以后补充map和obj的区别）