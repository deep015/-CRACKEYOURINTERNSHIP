/**
 * 
 * @param arr 
 * Chocolate Distribution Problem

Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. Each packet can have a variable number of chocolates. There are M students, the task is to distribute chocolate packets among M students such that :
1. Each student gets exactly one packet.
2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

Example 1:

Input:
N = 8, M = 5
A = {3, 4, 1, 9, 56, 7, 9, 12}
Output: 6
Explanation: The minimum difference between maximum chocolates and minimum chocolates is 9 - 3 = 6 by choosing following M packets :{3, 4, 9, 7, 9}.
 */




function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function findMinDifference(A, N, M) {
    // Sort the array using bubble sort
    bubbleSort(A);

    // Initialize the minimum difference to a large number
    let minDifference = Infinity;

    // Slide the window of size M through the sorted array
    for (let i = 0; i <= N - M; i++) {
        // Calculate the difference between the maximum and minimum chocolates in this window
        let diff = A[i + M - 1] - A[i];

        // Update the minimum difference if a smaller difference is found
        if (diff < minDifference) {
            minDifference = diff;
        }
    }

    // Return the minimum difference
    return minDifference;
}

// Example usage:
let N = 8,
    M = 5;
let A = [3, 4, 1, 9, 56, 7, 9, 12];
console.log(findMinDifference(A, N, M)); // Output: 6