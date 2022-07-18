/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    if (target.charCodeAt() > letters[letters.length - 1].charCodeAt())
        return letters[0]
    let l = 0, r = letters.length - 1
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2)
        if (letters[mid].charCodeAt() <= target.charCodeAt()) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    return letters[l]
};
console.log(nextGreatestLetter(["c", "f", "j"], "d"))