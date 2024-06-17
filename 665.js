/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let scenarios = [];
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let tmp = [...nums.slice(0, i), ...nums.slice(i + 1, nums.length)];
        scenarios.push(tmp);
    }
    for (let i = 0; i < scenarios.length; i++) {
        let possible = true;
        for (let j = 0; j < scenarios[i].length - 1; j++) {
            if (scenarios[i][j] > scenarios[i][j + 1]) {
                possible = false;
            }
            if (possible) {
                ans += 1;
            }
        }
    }
    return ans > 0;
};
