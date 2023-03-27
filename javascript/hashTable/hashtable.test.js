'use strict';
const { HashTable, repeatedWord } = require('./index');

const tableSize = 1024;
const table = new HashTable(tableSize);

const hashOne = table.hash('Jordan');
const hashTwo = table.hash('Adrienne');
const hashThree = table.hash('Joe');

table.set('Jordan', 'Beer');
table.set('Adrienne', 'Sleeping');
table.set('Joe', 'Whiskey');

describe('HashTable', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    expect(table.has('Joe')).toBeTruthy();
    expect(table.has('Ryan')).toBeFalsy();
  });

  it('Retrieving based on a key returns the value stored', () => {

    expect(table.get('Joe')).toEqual('Whiskey');

  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {

    expect(table.get('Ryan')).toEqual(null);

  });

  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {

    expect(table.keys()).toEqual(['Joe', 'Adrienne', 'Jordan']);

  });

  it('Successfully handle a collision within the hashtable', () => {
    table.set('oJe', 'Pineapple');
    expect(table.get('oJe')).toEqual('Pineapple');
  });

  it('Successfully hash a key to an in-range value', () => {

    expect(hashOne).toBeLessThan(tableSize);
    expect(hashTwo).toBeLessThan(tableSize);
    expect(hashThree).toBeLessThan(tableSize);

    expect(hashOne).toBeGreaterThanOrEqual(0);
    expect(hashTwo).toBeGreaterThanOrEqual(0);
    expect(hashThree).toBeGreaterThanOrEqual(0);
  });

  it('It should find the first word to occur more than once in a string', () => {
    expect(repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...')).toEqual('it');

    expect(repeatedWord('Once upon a time, there was a brave princess who...')).toEqual('a');

    expect(repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn\'t know what I was doing in New York...')).toEqual('summer');

    expect(repeatedWord('This is a test for null')).toEqual(null);
  });

});

