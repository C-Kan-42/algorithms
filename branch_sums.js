// a list of branch sums, ordered
// are values positive or negative?
// DFS, stack, LIFO, keep taking left child
// keep going until you reach a leaf (both children are null), then add that sum to array
// reset sum, 

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    var sums = [];
    var stack = [tree];
    var currSum = 0;
    while (stack.length !== 0) {
        var currNode = stack.pop();
        currSum += currNode.value;

        if (currNode.right) {
            stack.push(currNode.right);
        }

        if (currNode.left) {
            stack.push(currNode.left);
        }

        if (!currNode.left && !currNode.right) {
            sums.push(currSum);
            currSum = currSum
            // How do you correctly reset currSum? 
        }


    }
}
