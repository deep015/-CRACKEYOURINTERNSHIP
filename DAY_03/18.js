const uniquePermutations = (arr) => {
    const results = [];

    // Function to manually sort the array using bubble sort
    const manualSort = (array) => {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    };

    // Function to generate the next permutation
    const nextPermutation = (array) => {
        let i = array.length - 2;
        while (i >= 0 && array[i] >= array[i + 1]) {
            i--;
        }
        if (i >= 0) {
            let j = array.length - 1;
            while (array[j] <= array[i]) {
                j--;
            }
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        reverse(array, i + 1);
    };

    // Function to reverse part of the array
    const reverse = (array, start) => {
        let end = array.length - 1;
        while (start < end) {
            [array[start], array[end]] = [array[end], array[start]];
            start++;
            end--;
        }
    };

    // Sort the array manually to start with the smallest permutation
    manualSort(arr);
    results.push(arr.slice());

    // Generate all unique permutations
    while (true) {
        nextPermutation(arr);
        let isNew = true;
        for (let i = 0; i < results.length; i++) {
            let equal = true;
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] !== results[i][j]) {
                    equal = false;
                    break;
                }
            }
            if (equal) {
                isNew = false;
                break;
            }
        }
        if (isNew) {
            results.push(arr.slice());
        } else {
            break;
        }
    }

    return results;
};

// Helper function to print the permutations
const printPermutations = (permutations) => {
    for (let i = 0; i < permutations.length; i++) {
        console.log(permutations[i].join(' '));
    }
};

// Example usage:
const arr1 = [1, 2, 1];
const arr2 = [4, 5];

console.log("Unique Permutations for [1, 2, 1]:");
printPermutations(uniquePermutations(arr1));

console.log("Unique Permutations for [4, 5]:");
printPermutations(uniquePermutations(arr2));