'use strict';

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key){
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    if (!this.buckets[position]) {
      this.buckets[position] = {};
    }
    this.buckets[position][key] = value;
  }

  get(key){
    let position = this.hash(key);
    if(this.buckets[position]){
      let value = this.buckets[position][key];
      return value;
    } else {
      return null;
    }
  }

  has(key){
    let position = this.hash(key);

    let result = this.buckets[position] ? true : false
    return result;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let key in this.buckets[i]) {
          keysArr.push(key);
        }
      }
    }
    return keysArr;
  }
}


function repeatedWord(str) {
  const theseUnsHereAintNoWord = [' ', ',', '.', ';', ':', '-', '_', '!', '?'];
  const table = new HashTable(1024);
  let currentWord = '';
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i).toLowerCase();
    if (theseUnsHereAintNoWord.includes(char)) {
      if (currentWord.length > 0) {
        if (table.has(currentWord)) {
          return currentWord;
        }
        table.set(currentWord, true);
        currentWord = '';
      }
    } else {
      currentWord += char;
    }
  }
  if (currentWord.length > 0 && table.has(currentWord)) {
    return currentWord;
  }
  return null;
}

module.exports = { HashTable, repeatedWord };
