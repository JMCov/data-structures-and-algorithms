'use strict';


const { Node, Tree, BST } = require('./index');

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
