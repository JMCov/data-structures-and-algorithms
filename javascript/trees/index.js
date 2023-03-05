'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// class KaryNode{
//   constructor(value, k) {
//     this.value = value;
//     this.children = new Array(k).fill(null);
//   }
// }

// class KaryTree{
//   constructor(){
//     this.root = null;
//   }
// }


class Tree {
  constructor() {
    this.root = null;

  }

  preOrder() {
    const results = [];

    const traverse = (node) => {

      results.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
    traverse(this.root);
    return results;

  }

  inOrder() {
    const results = [];
    const traverse = (node) => {

      if (node.left) traverse(node.left);
      results.push(node.value);

      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }


  postOrder() {
    const results = [];
    const traverse = (node) => {

      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

}

class BST extends Tree {
  super() {
    this.root = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (current) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let contains = false;

    while (current && !contains) {
      if (value < current.value) {
        current = current.left;
      }else if (value > current.value) {
        current = current.right;
      } else {
        contains = true;
      }
    }
    return contains;

  }
}

module.exports = { Tree, Node, BST};
