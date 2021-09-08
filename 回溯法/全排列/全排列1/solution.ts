function permute(nums: number[]): number[][] {

    const len: number = nums.length;
    let res: Array<Array<number>> = new Array<Array<number>>(), mark: Array<boolean> = new Array<boolean>(len);
    for (let i = 0; i < len; i++) {
        mark[i] = false;
    }
    function Digui(s: number, arr: number[], str: number[], mark: boolean[]): void {
        mark[s] = true
        str.push(arr[s]);
        for (let i = 0; i < len; i++) {
            if (!mark[i]) {
                Digui(i, arr, str, mark);
            }
        }
        if (str.length == len) {
            const _str=str.concat()//注意数组引用问题
            res.push(_str);
            mark[s] = false;
            str.splice(str.length-1,1)
            return
        };
        mark[s] = false;
        str.splice(str.length-1,1)
    }

    for (let i = 0; i < len; i++) {
        mark[i] = true
        Digui(i, nums, [], mark);
        mark[i] = false
    }
    return res;
};