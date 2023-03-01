'use strict';

// Require our linked list implementation
const { Stack, Queue, PseudoQueue, AnimalShelter, validateBrackets } = require('./index');

describe('Stacks and Queues', () => {

  it('Can successfully push and pop multiple onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
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

  it('should be able to determin if brackets are balanced', () => {

    let str1 = '(){}[]';
    let str2 = '(()';

    expect(validateBrackets(str1)).toBeTruthy();
    expect(validateBrackets(str2)).toBeFalsy();

  });


});
