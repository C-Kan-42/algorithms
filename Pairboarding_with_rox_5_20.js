// Problem 1
// Isomorphic Strings
// Overview: For two strings to be isomorphic, all occurrences of a character in string A can be 
// replaced with another character to get string B. The order of the characters must be preserved.
// There must be one-to-one mapping for every char of string A to every char of string B.

// paper and title would return true. egg and sad would return false. dgg and add would return true.

// isIsomorphic("egg", 'add'); // true
// isIsomorphic("paper", 'title'); // true
// isIsomorphic("kick", 'side'); // false
// This problem should be completed in O(N) time and O(N) space.

//Assumptions
// only given strings with letters, e.g. no spaces, symbols, numbers, etc.
// all string chars will be lowercase
// immediately return false if strings are not the same length

// Pseudocode
// immediately return false if strings are not the same length
// initialize two objects, one for each string
// iterate through the strings using a range of the indices (0..end), 
// 'p', 't'
// { 'p': 't', 'a': 'i', ... }
// obj[char_1] === char_2 at same index in the 2nd string
// 3 cases:
    // if they are the same (true), keep looping through strings
    // if they are different (false), return false
    // have not previously encountered the char, 
            // check char in 2nd string against array of values in our object, if it exists as a value in our object, return false, otherwise
            // create key-value pair, add pair to map/object, and then keep looping
// at the end of our loop, return true

// Edge case:
// 'paper', 'fffff'
// {'p': 'f', 'a': 'f', }

function isIsomorphic(str1, str2) {
    //return false if not same length
    var map = {};

    for(var i = 0; i < str1.length; i++) {
        var char_1 = str1[i];
        var char_2 = str2[i];

        if (map[char_1] !== null) {
            //compare map[char_1] === char_2
            // if they are the same (true), keep looping through strings
            // if they are different (false), return false
        } else { // encountered a new char_1

        }

    }

    //check that map has unique values //check JS method
    //if it does, return true
    //if not, return false

}