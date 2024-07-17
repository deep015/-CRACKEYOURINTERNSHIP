v

var merge = function(nums1, m, nums2, n) {

    let result = Array(m + n)
        // Initialize pointers
    let i = 0; // Pointer for the last element in nums1's initial part
    let j = 0; // Pointer for the last element in nums2
    let k = 0; // Pointer for the last position in nums1

    // Merge nums2 into nums1 starting from the end
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            result[k] = nums1[i];
            i++;
            k++;
        } else {
            result[k] = nums2[j];
            j++;
            k++;
        }

    }

    while (i < m) {
        result[k] = nums1[i];
        i++;
        k++;
    }
    while (j < m) {
        result[k] = nums2[i]
        i++;
        k++;
    }

    for (let i = 0; i < result.length; i++) {
        nums1[i] = result[i]
    }

};

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1); // Output: [1,2,2,3,5,6]