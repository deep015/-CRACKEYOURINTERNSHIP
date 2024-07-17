var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    const result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue; // Skip duplicates for the first element

        for (let j = 0; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue; // Skip duplicates for the second element

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Skip duplicates for the third and fourth elements
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};