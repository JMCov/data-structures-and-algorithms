'use strict';


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



module.exports = { Stack, Queue, PseudoQueue, AnimalShelter };
