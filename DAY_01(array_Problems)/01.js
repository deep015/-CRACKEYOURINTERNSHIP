/**
 * 
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
 */

var findDuplicate = function(nums) {

    let found = {}; // to keep track of elements

    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];

        if (found[value]) {
            return value;
        } else {
            found[value] = true;
        }
    }
    return -1; // This line will never be reached because there is always a duplicate
};
nums1 = [1, 5, 6, 4, 5]
var result = findDuplicate(nums1)
console.log(result);