// what format is the tree given in?
// duplicate values? yes, possible
// Keep searching tree, choosing left or right by comparing currNode.val 
// to target, until you've reached target or you've encountered a close number
// how to know you've reached closest number?
//	keep a variable to keep track of abs value of min difference between target and node val
// Keep searching tree until you've reached target or hit a null value
// DFS, implement a stack LIFO, push and pop from the back end to reduce 
// time complexity

function findClosestValueInBst(tree, target) { //target = 12
    stack = [tree]; // [10]
    let closestVal = tree.value; // 10

    while (stack.length !== 0) { // stack = [14]
        var currNode = stack.pop(); // 13
        if (Math.abs(target - currNode.value) < Math.abs(target - closestVal)) {
            closestVal = currNode.value; // 13
        }
        if (currNode.value === target) {
            return currNode.value;
        } else if (currNode.value < target && currNode.right !== null) {
            stack.push(currNode.right);
        } else if (currNode.left !== null) { //
            stack.push(currNode.left);
        }
    }

    return closestVal; //13

}
