'use strict';


const { Node, Tree, BST, breadthFirst, fizzBuzzTree } = require('./index');

describe('Trees', () => {
  let tree = new Tree();
  tree.root = new Node(10);
  tree.root.left = new Node(5);
  tree.root.right = new Node(15);
  tree.root.left.left = new Node(1);
  tree.root.left.right = new Node(8);
  tree.root.right.right = new Node(17);

  it('can be created as expected', () => {

    expect(tree.root.value).toEqual(10);
    expect(tree.root.right.left).toBeNull();

  });

  it('returns pre-order array as expected', () => {
    const results = tree.preOrder();

    expect(results).toEqual([10, 5, 1, 8, 15, 17]);
  });

  it('returns in-order array as expected', () => {
    const results = tree.inOrder();

    expect(results).toEqual([1, 5, 8, 10, 15, 17]);
  });

  it('returns post-order array as expected', () => {
    const results = tree.postOrder();

    expect(results).toEqual([1, 8, 5, 17, 15, 10]);
  });

  it('returns the max number', () => {
    const results = tree.getMax();
    expect(results).toEqual(17);
  });

});

describe('Binary Search Trees', () => {

  let bstree = new BST();
  bstree.add(10);
  bstree.add(15);
  bstree.add(5);
  bstree.add(1);
  bstree.add(8);
  bstree.add(17);

  it('adds nodes to a Binary Search Tree', () => {
    expect(bstree.root.value).toEqual(10);
    expect(bstree.root.right.left).toBeNull();
    expect(bstree.root.right.right.value).toEqual(17);
    expect(bstree.root.left.left.value).toEqual(1);

  });

  it('should successfully search for a value within the tree', () => {

    expect(bstree.contains(2)).toBeFalsy();
    expect(bstree.contains(1)).toBeTruthy();
    expect(bstree.contains(17)).toBeTruthy();

  });

});

describe('BreadthFirst', () => {

  let tree = new Tree();
  tree.root = new Node(5);
  tree.root.left = new Node(45);
  tree.root.right = new Node(4);
  tree.root.left.left = new Node(23);
  tree.root.left.right = new Node(55);
  tree.root.right.right = new Node(7);
  tree.root.right.left = new Node(56);

  it('Returns a Breadth First ordered list', () => {

    expect(breadthFirst(tree)).toEqual([5, 45, 4, 23, 55, 56, 7]);

  });


});

describe('FizzBuzz tests', () => {

  it('fizzbuzz works', () => {
    let tree = new Tree();
    tree.root = new Node(5);
    tree.root.left = new Node(1);
    tree.root.right = new Node(8);
    tree.root.left.left = new Node(10);

    let test = fizzBuzzTree(tree);
    expect(test.root.value).toEqual('Buzz');
    expect(test.root.left.value).toEqual('1');
    expect(test.root.right.value).toEqual('8');
    expect(test.root.left.left.value).toEqual('Buzz');

  });

});
