
// 496. Next Greater Element I

// You are given two arrays (without duplicates) nums1 and nums2 
// where nums1’s elements are subset of nums2. Find all the next 
// greater numbers for nums1's elements in the corresponding places of nums2.

// The Next Greater Number of a number x in nums1 is the first 
// greater number to its right in nums2. If it does not exist, output -1 for this number.

// [1,3, 2, 4]
   

// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
// Output: [-1,3,-1]
// Explanation:
//     For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
//     For number 1 in the first array, the next greater number for it in the second array is 3.
//     For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4].
// Output: [3,-1]
// Explanation:
//     For number 2 in the first array, the next greater number for it in the second array is 3.
//     For number 4 in the first array, there is no next greater number for it in the second array, so output -1.

// Assumptions/Clarifications
// No duplicates in each array
// Every el in nums1 will appear in nums2
// Assume arrays have integers
// 

// Initial thoughts/brute-force
// Iterate through nums1 array
// Find index in nums2 array
// iterate through sub-array of numbers to the right of currNum
    // the first number that's greater than currNum, push into result arr
    // if none are greater, push -1 in result arr
// n = length of nums1 array, m = lenght of nums2 arr
// O( n * m ) 
// .indexOf => lookup time O(array length)

// Create an object with keys as the number, and value as the index of that number in nums2 array
// O (n * 1 * m)


function nextGreaterElement(nums1, nums2) {
    let result = [];
    let indexLookup = {};

    for (let i = 0; i < nums2.length; i++) {
        indexLookup[num2[i]] = i;
    }

    for (let j = 0; j < nums1.length; j++) {
        let currEl = nums1[j];
        let idx = indexLookup[currEl]; // returns corresponding index in nums2 array
        let nextGreater = -1;

        for (let k = idx + 1; k < nums2.length; k++) {
            if (nums2[k] > currEl) {
                nextGreater = nums2[k]; 
                break;
            }
        }

        result.push(nextGreater);

    }

    return result;

}

// 406. Queue Reconstruction by Height

// Suppose you have a random list of people standing in a queue.
// Each person is described by a pair of integers(h, k), 
// where h is the height of the person and k is the number of people 
// in front of this person who have a height greater than or equal to h.
// Write an algorithm to reconstruct the queue.

// Note: The number of people is less than 1, 100.

// Example

// Input:
// [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]
// [Bob, Alice, Andrew...] NOT in order

// Output:
// [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]
// return queue in the CORRECT order


//  no people taller than 7:   -    [7, 0][4, 4]  
                    //              [7,0] [4,4] [7,1]                   [7,0]  [4,4]  [7,1] 
                    //              [5,0][7,0][7,1][4,4]                    [5,0][7,0][4,4][7,1] 
                    //              [5,0][7,0][6, 1][7,1][4,4]              [5,0][7,0][6, 1][4,4][7,1]                      [5,0][7,0][4,4][6,1][7,1]
                    //              [5,0][7,0][6,1][5,2][7,1][4,4]         [5,0][7,0][5,2][6,1][4,4][7,1]                [5,0][7,0][5,2][4,4][6,1][7,1]



                    0 1 2
                    [7, 1] [7, 0]   [4, 4]  

// iterate through the arr.
// curList 
// if curList.length === arr.lenght, check the curList has the valid order, return curList if yes
// for i (0...curList.lenght), insert current element at position i and check the order of curList[0...i] is valid
// if yes contiue; return otherwise;



function reQueue(arr){
    let res = null;
    function dfs(arr, curList, idx){
        if(idx >= arr.length){
            if (isValidList(curList, curList.length - 1)){
                res = curList;
            }
            return;
        }
        
        curList.unshift(arr[idx]);
        if(isValidList(curList, 0)){
            dfs(arr, curList, idx + 1);
        }
        // const combined1 = [].concat(cars, trucks) => returns [cars, trucks]
        for(let i = 1; i <= curList.length){
            const temp = curList.slice(0, i).concat([arr[i]], curList.slice(i, curList.length));
            if(isValidList(temp, i)){
                dfs(arr, temp, idx + 1);
            }
        }
    }
    dfs(arr, [], 0);
    return res;
}

[5,0][7,0][6,1][5,2][7,1][4,4]                   [7,0]  [4,4]  [7,1] 
            




function isValidList(arr, idx){

    for(let i = 0; i <= idx; i++){

    }

    return true;
}