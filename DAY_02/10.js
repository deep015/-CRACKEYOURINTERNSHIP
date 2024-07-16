/**
 * Given an integer array nums and an integer k, 
 * return the number of non-empty subarrays that have a 
 * sum divisible by k.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
Example 2:

Input: nums = [5], k = 9
Output: 0
 
 */

function subarraysDivByK(nums, k) {
    let remainder_count = { 0: 1 }; // Remainder 0 is initially seen once
    let current_sum = 0;
    let count = 0;

    for (let num of nums) {
        current_sum += num;
        let remainder = current_sum % k;

        // Ensure remainder is positive
        if (remainder < 0) {
            remainder += k;
        }

        if (remainder in remainder_count) {
            count += remainder_count[remainder];
        }

        if (!(remainder in remainder_count)) {
            remainder_count[remainder] = 0;
        }

        remainder_count[remainder]++;
    }

    return count;
}

// Example usage:
const nums1 = [4, 5, 0, -2, -3, 1];
const k1 = 5;
console.log(subarraysDivByK(nums1, k1)); // Output: 7

const nums2 = [5];
const k2 = 9;
console.log(subarraysDivByK(nums2, k2)); // Output: 0