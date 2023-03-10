'use strict';

class Stack {
  constructor() {
    this.value = [];
  }

  push(value) {
    this.value.push(value);
  }
  pop() {
    if (this.value.length === 0) {
      return null;
    }
    return this.value.pop();
  }
  peek() {
    return this.value[this.value.length - 1];
  }
  isEmpty() {

    return this.value.length === 0;
  }
  getMax() {
    let largest = 0;

    for (let i = 0; i < this.value.length; i++) {
      if (this.value[i] > largest) {
        largest = this.value[i];
      }
    }
    return largest;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
    this.length++;
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
    this.length--;
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



function validateBrackets(str) {
  let stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    if (temp === '(' || temp === '[' || temp === '{') {
      stack.push(temp);
    }
    if (stack.length === 0) {
      return false;
    }
    if (temp === ')') {
      let check = stack.pop();
      if (check !== '(') {
        return false;
      }
    }
    if (temp === ']') {
      let check = stack.pop();
      if (check !== '[') {
        return false;
      }
    }
    if (temp === '}') {
      let check = stack.pop();
      if (check !== '{') {
        return false;
      }
    }
  }
  if (stack.pop() !== null) {
    return false;

  }
  return true;
}

function duckDuckGoose(arr, int) {
  let q = new Queue();
  for (let i = 0; i < arr.length; i++) {
    q.enqueue(arr[i]);
  }
  while (q.length > 1) {
    for (let i = 1; i <= int; i++) {
      if (i < int) {
        q.enqueue(q.dequeue());
      }
      if (i === int) {
        q.dequeue();
      }

    }
  }
  return q.peek();
}



module.exports = { Stack, Queue, PseudoQueue, AnimalShelter, validateBrackets, duckDuckGoose };
