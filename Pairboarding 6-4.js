// 210. Course Schedule II

// There are a total of n courses you have to take, labeled from 0 to n - 1.
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1,
//  which is expressed as a pair: [0, 1]
// Given the total number of courses and a list of prerequisite pairs, return the ordering of courses 
// you should take to finish all courses.
// There may be multiple correct orders, you just need to return one of them.If it is impossible to finish 
// all courses, return an empty array.

// Example 1:

// Input: 2, [[1, 0]]
// Output: [0, 1]
// Explanation: There are a total of 2 courses to take.To take course 1 you should have finished
// course 0. So the correct course order is[0, 1].

// Example 2:

// Input: 4, [[1, 0], [2, 0], [3, 1], [3, 2]]
// Output: [0, 1, 2, 3] or [0, 2, 1, 3]
// Explanation: There are a total of 4 courses to take.To take course 3 you should have finished both
// courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is[0, 1, 2, 3].Another correct ordering is[0, 2, 1, 3].

// Note:
// The input prerequisites is a graph represented by a list of edges, not adjacency matrices.Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.


// Initialize variable to store path/result

    //              0
    //          1       2
    //       3         3
    //     4         4

// BFS 
// queue, FIFO
// initialize an array that will act as a queue, traverse the tree by 
// Keep adding children until queue is empty
// How to find children? 
// check result.length === # of courses
// don't include duplicates in our output array 
// [ , , , , ]


// Input: 4, [[1, 0], [2, 0], [3, 1], [3, 2]]


// Input: 2, [[1, 0]]
// Output: [0, 1]

function courseSchedule(numCourses, prereqs) { //numCourses = 2, prereqs: [0, 1]
    var output = [];
    var queue = [0];
    
    while (queue.length !== 0) { 
        var currCourse = queue.shift(); // currCourse = 0
        
        if (!output.includes(currCourse)){ 
            output.push(currCourse); // output = [0]
        }
       
        if (output.length === numCourses) {
            return output; 
        }

        for (var i = 0; i < prereqs.length; i++) { // fix how we iterate through prereqs
            var currPair = prereqs[i]; 
            if (currPair[1] === currCourse) {  
                queue.push(currPair[0]);
            }
        }

    }

    return [];

}

