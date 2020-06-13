// Must be in same order, but can skip elements
// A single number is a subset
// Iterate through main array
// Have two counters, one looping through array, one looping through sequence
// Once you find first el in sequence in main array, look for second el
// You break out of loop once you reach the end of main array, 
// or end of sequence array

function isValidSubsequence(array, sequence) {
    var seqIdx = 0;

    for (var i = 0; i < array.length; i++) { // i = 7
        currTarget = sequence[seqIdx]; // 10

        if (array[i] === currTarget) { // array[i] = 10
            seqIdx++;  // seqIdx = 4
            if (seqIdx === sequence.length) { // length = 4
                return true; // returns here
            }
        }
    }

    return false;
}

// Time comp: O(n), where n = array length
// Space comp: O(1)