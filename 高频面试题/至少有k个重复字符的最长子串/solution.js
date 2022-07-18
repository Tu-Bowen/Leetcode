/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var longestSubstring = function (s, k) {
    let n = s.length,cnt=new Map()
    if(s.length<k)return 0
    for(let i=0;i<n;i++){
        cnt.set(s[i],cnt.has(s[i])?cnt.get(s[i])+1:1)
    }
    for(const [key,val] of cnt.entries()){
        if(val<k){
            let merageArr=s.split(key)
            let res=0
            // console.log(merageArr)
            merageArr.forEach((val)=>{
                res=Math.max(longestSubstring(val,k),res)
            })
            return res
        }
    }
    return s.length
};

console.log(longestSubstring("aaabb",3))


























var _longestSubstring = function (s, k) {
    let n = s.length
    function dfs(start, end) {
        let cnt = new Array(26).fill(0), asca = 'a'.charCodeAt()
        for (let i = start; i <= end; i++) {
            let asc = s[i].charCodeAt()
            cnt[asc - asca]++
        }
        let spt = 0
        for (let i = 0; i < 26; i++) {
            if (cnt[i]>0&&cnt[i] < k) {
                spt = String.fromCharCode(i + asca)
                break
            }
        }
        if (spt === 0) {
            return end - start + 1
        }
        let l = start, r = end, res = 0
        while (l <= r) {
            while (l <= r && s[l] === spt) {
                l++
            }
            if(l>r)break
            let nextStart = l
            while (l <= r && s[l] !== spt) {
                l++
            }
            let rot = dfs(nextStart, l - 1)
            res = Math.max(rot, res)
        }
        return res
    }
    return dfs(0, n - 1)
};



var __longestSubstring = function(s, k) {
    const n = s.length;
    return dfs(s, 0, n - 1, k);
}

const dfs = (s, l, r, k) => {
    const cnt = new Array(26).fill(0);
    for (let i = l; i <= r; i++) {
        cnt[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    }

    let split = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] > 0 && cnt[i] < k) {
            split = String.fromCharCode(i + 'a'.charCodeAt());
            break;
        }
    }
    if (split == 0) {
        return r - l + 1;
    }

    let i = l;
    let ret = 0;
    while (i <= r) {
        while (i <= r && s[i] === split) {
            i++;
        }
        if (i > r) {
            break;
        }
        let start = i;
        while (i <= r && s[i] !== split) {
            i++;
        }

        const length = dfs(s, start, i - 1, k);
        ret = Math.max(ret, length);
    }
    return ret;
};