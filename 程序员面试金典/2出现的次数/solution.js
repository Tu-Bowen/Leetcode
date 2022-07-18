const getCount = (n, k) => {
    if (n <= 0) return 0
    let digit = 1, ans = 0
    let high = n / 10 >> 0, cur = n % 10, low = 0
    while (high || cur) {
        console.log(high, low, cur)
        if (cur < k) ans += high * digit
        else if (cur == k) ans += high * digit + low + 1
        else ans += (high + 1) * digit
        low += cur * digit
        cur = high % 10
        high = high / 10 >> 0
        digit *= 10
    }
    return ans
}

/**
 * @param {number} n
 * @return {number}
 */
var numberOf2sInRange = function (n) {
    let high = n / 10 >> 0, low=0 , cur= n % 10, digit = 1, ans = 0
    while (high || cur) {
        if(cur<k){
            ans=ans+digit*high
        }else if(cur==k){
            ans=ans+high*digit+low+1
        }else{
            ans=ans+digit*(high+1)
        }
        low=digit*cur
        cur =high%10
        high = high / 10 >> 0
        digit=digit*10
    }
    return ans
};