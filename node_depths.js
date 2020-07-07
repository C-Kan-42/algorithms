// use BFS to traverse tree, since all nodes on same level have same depth
// how to increment node depth? pass down parent's depth then add 1
// 
// keep a running sum of node depths
// with BFS, implement a queue, FIFO
// 
function nodeDepths(root) {
    var sum = 0;
    var queue = [{ node: root, depth: 0 }];

    while (queue.length !== 0) {
        var curr = queue.shift();
        sum += curr.depth;

        if (curr.node.left) {
            queue.push({ node: curr.node.left, depth: curr.depth + 1 });
        }
        if (curr.node.right) {
            queue.push({ node: curr.node.right, depth: curr.depth + 1 });
        }

    }

    return sum;
}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
