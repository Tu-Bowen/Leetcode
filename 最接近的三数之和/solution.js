/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let res = new Array(3), min = 100000;
    nums.sort((x, y) => {
        return x - y;
    })
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let _target = target - nums[i], l = i + 1, r = nums.length - 1;
        while (l < r) {
            if (nums[l] + nums[r] === _target) {
                return target;
            }
            let cur = Math.abs(_target - nums[l] - nums[r])
            if (cur < min) {
                res[0] = nums[i];
                res[1] = nums[l];
                res[2] = nums[r];
                min = cur
            }
            if (nums[l] + nums[r] < _target) {
                let _l=l+1;
                while(_l<r&&nums[_l]===nums[l]){
                    _l++;
                }
                l=_l;
            }else{
                let _r=r-1;
                while(l<_r&&nums[_r]===nums[r]){
                    _r--
                }
                r=_r;
            }
        }

    }
    return res[0]+res[1]+res[2]
};

threeSumClosest([-1, 2, 1, -4],1)