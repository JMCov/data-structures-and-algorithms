'use strict';

// Require our linked list implementation
const { Stack, Queue, PseudoQueue, AnimalShelter } = require('./index');

describe('Stacks and Queues', () => {

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

  it('Can successfully add and remove animal to the animal shelter', () => {
    let animalShelter = new AnimalShelter();
    animalShelter.enqueue('dog', 'Spot');
    animalShelter.enqueue('cat', 'Mr. Mittens');
    animalShelter.enqueue('dog', 'Pedro');
    animalShelter.enqueue('dog', 'Baxter');
    animalShelter.enqueue('cat', 'Felix');

    animalShelter.dequeue('cat');

    expect(animalShelter.dogQueue.front.value.name).toEqual('Spot');

    expect(animalShelter.catQueue.front.value.name).toEqual('Felix');
  });


});
