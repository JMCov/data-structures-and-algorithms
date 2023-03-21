'use strict';

const { mergeSort } = require('./index');

describe('Merge Sort Tests', () => {

  it('Sorts an array properly', () => {
    let arr = [14, 54, 2, 15, 76];
    let sorted = mergeSort(arr);
    expect(sorted).toEqual([2, 14, 15, 54, 76]);
  });


});
