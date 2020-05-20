/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let tail = nums1.length - 1
    for (let i = nums2.length; i >= 0; i--) {
        if (nums2[i] > nums1[Math.max(0,m-1)]) {
            nums1[tail] = nums2[i]
            tail--
        }
        if (nums2[i] < nums1[Math.max(0,m-1)]) {
            nums1[m] = nums1[Math.max(0,m-1)]
            nums1[Math.max(0,m-1)] = nums2[i]
        }
    }
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))