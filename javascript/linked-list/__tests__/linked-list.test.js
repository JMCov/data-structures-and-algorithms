'use strict';

// Require our linked list implementation
const { LinkedList, zipLists, reverseList, isPalindrome, Stack, Queue, PseudoQueue } = require('../index');

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

  it('Should return the value of the node kth away from the end of the list', () => {
    const list = new LinkedList();
    list.append('apple');
    list.append('orange');
    list.append('kiwi');
    list.append('mango');
    list.append('pineapple');
    list.append('carrot');

    expect(list.kthFromEnd(7)).toEqual('Exception');
    expect(list.kthFromEnd(6)).toEqual('Exception');
    expect(list.kthFromEnd(5)).toEqual('apple');
    expect(list.kthFromEnd(4)).toEqual('orange');
    expect(list.kthFromEnd(3)).toEqual('kiwi');
    expect(list.kthFromEnd(2)).toEqual('mango');
    expect(list.kthFromEnd(1)).toEqual('pineapple');
    expect(list.kthFromEnd(0)).toEqual('carrot');

  });

  it('should zip 2 existing linked lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();


    list1.append('apple');
    list1.append('orange');
    list1.append('kiwi');
    list2.append('mango');
    list2.append('pineapple');
    list2.append('carrot');

    const list3 = zipLists(list1, list2);


    expect(list3.head.value).toEqual('apple');
    expect(list3.head.next.value).toEqual('mango');
    expect(list3.head.next.next.value).toEqual('orange');
    expect(list3.head.next.next.next.value).toEqual('pineapple');
    expect(list3.head.next.next.next.next.value).toEqual('kiwi');
    expect(list3.head.next.next.next.next.next.value).toEqual('carrot');


  });

  it('should reverse an existing linked lists', () => {
    const list1 = new LinkedList();

    list1.append('apple');
    list1.append('orange');
    list1.append('kiwi');
    list1.append('mango');


    const list2 = reverseList(list1);


    expect(list2.head.value).toEqual('mango');
    expect(list2.head.next.value).toEqual('kiwi');
    expect(list2.head.next.next.value).toEqual('orange');
    expect(list2.head.next.next.next.value).toEqual('apple');



  });

  it('should detect if an existing linked list is a Palindrome', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    list1.append('apple');
    list1.append('orange');
    list1.append('kiwi');
    list1.append('orange');
    list1.append('apple');
    list2.append('apple');
    list2.append('orange');
    list2.append('kiwi');
    list2.append('banana');
    list2.append('apple');


    let returnedList1 = isPalindrome(list1);
    let returnedList2 = isPalindrome(list2);


    expect(returnedList1).toBeTruthy();
    expect(returnedList2).toBeFalsy();

  });


  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);

    expect(stack.top.value).toEqual(1);

  });

  it('Can successfully push multiple onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });

  it('Can successfully pop off of a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    let poppedValue = stack.pop();

    expect(poppedValue).toEqual(3);
    expect(stack.top.value).toEqual(2);
  });



});
