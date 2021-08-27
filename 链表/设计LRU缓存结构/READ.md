# 设计URL缓存


我自己是纯纯的暴力解法

由于需要频繁的插入和删除，所以传统的队列并不适合，使用链表会更合适

```
import java.util.*;

public class Solution {
    private Map<Integer, Node> map = new HashMap<>();
    private Node head = new Node(-1,-1);
    private Node tail = new Node(-1,-1);
    private int k;
    public int[] LRU (int[][] operators, int k) {
        this.k = k;
        head.next = tail;
        tail.prev = head;
        int len = (int)Arrays.stream(operators).filter(x -> x[0] == 2).count();
        int[] res = new int[len];
        for(int i = 0, j = 0; i < operators.length; i++) {
            if(operators[i][0] == 1) {
                set(operators[i][1], operators[i][2]);
            } else {
                res[j++] = get(operators[i][1]);
            }
        }
        return res;
    }

    private void set(int key, int val) {
        if(get(key) > -1) {
            map.get(k).val = val;
        } else {
            if(map.size() == k) {
                int rk = tail.prev.key;
                tail.prev.prev.next = tail;
                tail.prev = tail.prev.prev;
                map.remove(rk);
            }
            Node node = new Node(key, val);
            map.put(key, node);
            moveToHead(node);
        }
    }

    private int get(int key) {
        if(map.containsKey(key)) {
            Node node = map.get(key);
            node.prev.next = node.next;
            node.next.prev = node.prev;
            moveToHead(node);
            return node.val;
        }
        return -1;
    }

    private void moveToHead(Node node) {
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
        node.prev = head;
    }

    static class Node{
        int key, val;
        Node prev, next;
        public Node(int key, int val) {
            this.key = key;
            this.val = val;
        }
    }
}
```
其实之前一直有个疑惑，就是如果之前有值的话，我再设置值的时候是不是要改变顺序，但是上面的题解并没有明确的改变操作，后来发现只要调用get函数就会有这样的操作


-----
题目来自牛客网：
https://www.nowcoder.com/practice/e3769a5f49894d49b871c09cadd13a61?tpId=190&&tqId=35214&rp=1&ru=/ta/job-code-high-rd&qru=/ta/job-code-high-rd/question-ranking