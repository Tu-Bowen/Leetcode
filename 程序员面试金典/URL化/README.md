# URL化


https://leetcode-cn.com/problems/string-to-url-lcci/

除了正则之外，还有划分成数组再合并的方法

贴一段下标操作

```
class Solution {
    public String replaceSpaces(String S, int length) {
        int size = S.length();
        char [] arr = new char[size];
        int sIndex = length-1;
        int charIndex = size-1;
        while(sIndex>=0 && charIndex>=0){
            char c = S.charAt(sIndex--);
            if(c==' '){
                arr[charIndex--]='0';
                arr[charIndex--]='2';
                arr[charIndex--]='%';
            }
            else{
                arr[charIndex--] = c;
            }
        }
        return new String(arr).substring(charIndex+1);
}
```