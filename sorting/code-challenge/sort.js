'use strict';

const { mainModule } = require('process');

// need to write the "callback" compareYear
function sortYear(arr) {
  arr.sort(compareYear);
  return arr;
}


function compareYear(a, b) {
  if (a.year === b.year) return 0;
  if (a.year < b.year) return 1;
  if (a.year > b.year) return -1;
}

function sortTitle(arr) {
  arr.sort(compareTitle);
  return arr;
}


function compareTitle(a, b) {

  const badWords = ['A ', 'An ', 'The '];

  const takeTheBadShitOff = (title) => {
    for (let words of badWords) {
      if (title.startsWith(words)) {
        return title.slice(words.length);
      }
    }
    return title;
  };

  const A = takeTheBadShitOff(a.title);
  const B = takeTheBadShitOff(b.title);

  if (A === B) return 0;
  if (A > B) return 1;
  if (A < B) return -1;
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle};
