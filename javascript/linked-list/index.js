'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {

    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;

    }
    this.length++;
  }

  append(value) {

    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  insertBefore(value, newValue) {
    let current = this.head;
    if (current.value === value) {
      this.insert(newValue);
      return;
    }
    while (current.next) {
      if (current.next.value === value) {
        let oldNext = current.next;
        current.next = new Node(newValue, oldNext);
        this.length++;
        return this.length;
      } else {
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    if (this.tail.value === value) {
      this.append(newValue);
      return;
    }

    while (current) {
      if (current.value === value) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return;
      }
      current = current.next;
    }
  }

  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    return str += 'NULL';
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }


  kthFromEnd(value) {
    if (value < 0) {
      return 'Exception';
    }

    let tempNum = (this.length - 1) - value;
    let current = this.head;

    if (tempNum === 0) {
      return current.value;
    }

    if (tempNum < 0) {
      return 'Exception';
    }

    for (let i = 0; i < tempNum; i++) {
      current = current.next;
    }

    return current.value;
  }
}

const zipLists = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;
  const list3 = new LinkedList();
  while (current1 || current2) {
    if (current1) {
      list3.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      list3.append(current2.value);
      current2 = current2.next;
    }

  }
  return list3;
};

const reverseList = (list) => {
  let current = list.head;
  const list2 = new LinkedList();

  while (current) {
    list2.insert(current.value);
    current = current.next;
  }
  return list2;
};

const isPalindrome = (list) => {

  let list1 = list;
  let list2 = reverseList(list1);
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 && current2) {
    if (current1.value !== current2.value) {
      return false;
    }
    current1 = current1.next;
    current2 = current2.next;
  }
  return true;
};


class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    let current = this.top;
    this.top = current.next;
    return current.value;
  }
  peek() {
    return this.top.value;
  }
  isEmpty() {

    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }
  dequeue() {
    let removedValue = null;
    if (this.front) {
      removedValue = this.front.value;
      if (this.front === this.back) {
        this.back = null;
      }
      this.front = this.front.next;
    }
    return removedValue;
  }

  peek() {
    if (!this.front) {
      return null;
    }
    return this.front.value;
  }
  isEmpty() {
    return this.front === null;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);

    while (this.stack2.length !== 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      return null;
    }
    let removedValue = this.stack1.pop();
    return removedValue;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
  }

  enqueue(species, name) {
    const newNode = new Animal(species, name);

    if (species === 'dog') {
      if (this.dogQueue.front) {
        this.dogQueue.back.next = newNode;
      } else {
        this.dogQueue.front = newNode;
      }
      this.dogQueue.back = newNode;
    }

    if (species === 'cat') {
      if (this.catQueue.front) {
        this.catQueue.back.next = newNode;
      } else {
        this.catQueue.front = newNode;
      }
      this.catQueue.back = newNode;
    }
  }

  dequeue(species) {
    let removedValue = null;

    if (species === 'dog') {
      if (this.dogQueue.front) {
        removedValue = this.dogQueue.front.value;
        if (this.dogQueue.front === this.dogQueue.back) {
          this.dogQueue.back = null;
        }
        this.dogQueue.front = this.dogQueue.front.next;
      }
      return removedValue;
    }

    if (species === 'cat') {
      if (this.catQueue.front) {
        removedValue = this.catQueue.front.value;
        if (this.catQueue.front === this.catQueue.back) {
          this.catQueue.back = null;
        }
        this.catQueue.front = this.catQueue.front.next;
      }
      return removedValue;
    }
  }

}



class Animal {
  constructor(species, name, next = null) {
    this.value = {
      species: species,
      name: name
    };
    this.next = next;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = { LinkedList, zipLists, reverseList, isPalindrome, Stack, Queue, PseudoQueue, AnimalShelter, Animal };
