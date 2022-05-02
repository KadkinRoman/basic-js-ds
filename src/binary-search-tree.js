const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
    constructor() {
        this.myRoot = null;
    }

    root() {
        return this.myRoot;
    }

    add(data) {
        this.myRoot = addWithin(this.myRoot, data)

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }

            return node;
        }
    }

    has(data) {
        return searchWithin(this.myRoot, data)

        function searchWithin(node, data) {
            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            return data < node.data ?
                searchWithin(node.left, data) :
                searchWithin(node.right, data);
        }
    }

    find(data) {
        return searchWithin(this.myRoot, data)

        function searchWithin(node, data) {
            if (!node) {
                return null;
            }

            if (node.data === data) {
                return node;
            }

            return data < node.data ?
                searchWithin(node.left, data) :
                searchWithin(node.right, data);
        }
    }

    remove(data) {
        this.myRoot = removeNode(this.myRoot, data);

        function removeNode(node, data) {
            if (!node) {
                return null
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFormRight = node.right;
                while (minFormRight.left) {
                    minFormRight = minFormRight.left;
                }
                node.data = minFormRight.data;

                node.right = removeNode(node.right, minFormRight.data)

                return node;
            }
        }


    }

    min() {
        if (!this.myRoot) {
            return;
        }

        let node = this.myRoot;
        while (node.left) {
            node = node.left;
        }

        return node.data;

    }

    max() {
        if (!this.myRoot) {
            return;
        }

        let node = this.myRoot;
        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};