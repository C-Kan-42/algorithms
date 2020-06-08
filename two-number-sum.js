// Assumptions/Clarifications
// Is input array always non-empty?
// if it's empty, return empty array
// Distinct integers, no repeats
// Either no pair, or one pair that sums to targetSum

//Pseudocode
// Brute force method: Iterate through array using nested loop O(n^2), compare every 
// number pair and if it sums to target, return that pair in an array
// How can we make it more time efficient? 

// more efficient!
// we use targetSum to find corresponding number for each ele
// in the array
// I.e., iterate through array
// For each element in the array, find corresponding number (targetSum - currEl)
// search for corresponding number in the array
// This is better, but searching is still O(n) time
// Okay, so why don't we use store every number in a hash table to make
//search time constant?
// key-value pair? or use set! and check if set has corr value. 
// if we find it, return that pair of numbers
// if we iterate through entire array, then return empty array outside the loop

//Ex: array = [3,5,-4,8,]
// targetSum = 14
// Output: []
function twoNumberSum(array, targetSum) {
    let seenNums = new Set();
    let corrNum;
    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];  // 8
        corrNum = targetSum - curNum; // 6
        if (seenNums.has(corrNum)) {  // 
            return [curNum, corrNum]; // 
        } else {
            seenNums.add(curNum);   // [3, 5, -4, 6]
        };
    }

    return []; //return []
}

// n = length of array
// Time comp: O(n)
// Space comp: O(2n) ~ O(n)