N couples sit in 2N seats arranged in a row and want to hold hands. We want to know the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats.

The people and seats are represented by an integer from 0 to 2N-1, the couples are numbered in order, the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2N-2, 2N-1).

The couples' initial seating is given by row[i] being the value of the person who is initially sitting in the i-th seat.

Example 1:

Input: row = [0, 2, 1, 3]   arr[i]     arr[i+1]      i+=2
Output: 1
Explanation: We only need to swap the second (row[1]) and third (row[2]) person.

Example 2:

Input: row = [3, 2, 0, 1]
Output: 0
Explanation: All couples are already seated side by side.
Note:

len(row) is even and in the range of [4, 60].
row is guaranteed to be a permutation of 0...len(row)-1.

[1,3,5,0,2,4] -> [1,0,5,3,2,4] -> [1,0,5,4,2,3]


c > n
0   +=2
[2,3,5,0,1,4]     [1,0,5,3,2,4]
/  \                    / \



     0
    | \ 
   / \   / \     2^n


   [3,2,5,4,0,7,1,6] 

   [0,7,1,3,2,5,4,6] 

   [0,7,1,3,2,5,4,6] 



   Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.


for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){

        // check if there is dup int in 
        const set = new Set();
        for(let row = i*3; row < i*3 + 3; row++){
            for(let col = j*3; col < j*3 +3; col++){
                
            }
        }
    }
}


def sudoku2(grid)
    seen = {}
    grid.each_with_index do |arr, row|
        arr.each_with_index do |el, col|
            if el != "."
                if seen["#{el} found in row #{row}"] or seen["#{el} found in col #{col}"] or seen["#{el} found in box #{row/3}-#{col/3}"]
                    return false
                else
                    seen["#{el} found in row #{row}"] = true
                    seen["#{el} found in col #{col}"] = true
                    seen["#{el} found in box #{row/3}-#{col/3}"] = true
                end
            end
        end
    end
    true
end



The Longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence of a given sequence such that all elements of the subsequence are sorted in increasing order. For example, the length of LIS for {10, 22, 9, 33, 21, 50, 41, 60, 80} is 6 and LIS is {10, 22, 33, 50, 60, 80}.


{10, 22, 9, 33, 21, 50}


dp 
dp[i]: represents the answer for subarray[0...i] and including the element arr[i];


{10}                0
{10, 22}            1
{9}                 2
{10, 22, 33}        3
{9, 21}             4


