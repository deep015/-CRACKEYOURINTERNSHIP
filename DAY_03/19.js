const subarraySum = (nums, k) => {
    const cumulativeSumMap = {};
    let cumulativeSum = 0;
    let count = 0;

    // Initialize the map with sum 0 occurring once
    cumulativeSumMap[0] = 1;

    for (let i = 0; i < nums.length; i++) {
        cumulativeSum += nums[i];

        // Check if (cumulativeSum - k) exists in the map
        if (cumulativeSumMap[cumulativeSum - k] !== undefined) {
            count += cumulativeSumMap[cumulativeSum - k];
        }

        // Update the map with the current cumulative sum
        if (cumulativeSumMap[cumulativeSum] === undefined) {
            cumulativeSumMap[cumulativeSum] = 1;
        } else {
            cumulativeSumMap[cumulativeSum]++;
        }
    }

    return count;
};

// Example usage:
console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2