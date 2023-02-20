'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });


  it('should insert at the beginning of empty', () => {
    const list = new LinkedList();
    list.insert('apple');

    expect(list.head.value).toEqual('apple');
    expect(list.head.next).toBeNull();
  });

  it('should insert at the beginning of populated', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');

    expect(list.head.value).toEqual('orange');
    expect(list.head.next.value).toEqual('apple');
    expect(list.head.next.next).toBeNull();
  });

  it('should display as a string', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');

    const linkedString = list.toString();

    expect(linkedString).toEqual('{ orange } -> { apple } -> NULL');
  });

  it('should indicate whether a given value exists', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.insert('orange');
    list.insert('kiwi');
    list.insert('mango');
    list.insert('pineapple');

    expect(list.includes('mango')).toBeTruthy();
    expect(list.includes('orange')).toBeTruthy();
    expect(list.includes('peach')).toBeFalsy();
  });

  it('should add a node/nodes to the end of the list', () => {
    const list = new LinkedList();
    list.insert('apple');
    list.append('orange');
    list.append('kiwi');
    list.append('mango');

    expect(list.tail.value).toEqual('mango');

    const linkedString = list.toString();
    expect(linkedString).toEqual('{ apple } -> { orange } -> { kiwi } -> { mango } -> NULL');
  });

  it('should insert a node before a node in the middle of the list', () => {
    const list = new LinkedList();
    list.append('apple');
    list.append('orange');
    list.append('kiwi');
    list.append('mango');
    list.insertBefore('orange', 'pineapple');

    const linkedString = list.toString();
    expect(linkedString).toEqual('{ apple } -> { pineapple } -> { orange } -> { kiwi } -> { mango } -> NULL');
  });

  it('should insert a node after a node in the middle of the list', () => {
    const list = new LinkedList();
    list.append('apple');
    list.append('orange');
    list.append('kiwi');
    list.append('mango');
    list.insertAfter('orange', 'pineapple');

    const linkedString = list.toString();
    expect(linkedString).toEqual('{ apple } -> { orange } -> { pineapple } -> { kiwi } -> { mango } -> NULL');
  });

});
