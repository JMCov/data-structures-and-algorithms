'use strict';

const { insertionSort } = require('./index');

describe('Insertion Tests', () => {

  it('Sorts an array properly', () => {
    let arr = [14, 54, 2, 15, 76];
    let sorted = insertionSort(arr);
    expect(sorted).toEqual([2, 14, 15, 54, 76]);
  });


});
