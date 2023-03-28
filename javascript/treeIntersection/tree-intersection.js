const { HashTable } = require('../hashTable/index');


const treeIntersection = (tree1, tree2) => {

  const table = new HashTable(1024);
  let arr1 = tree1.preOrder();
  let arr2 = tree2.preOrder();
  let duplicates = [];
  for (let i = 0; i < arr1.length; i++){
    table.set(arr1[i], true);
  }

  for (let i = 0; i < arr2.length; i++){
    let temp = arr2[i];
    if(table.has(temp)){
      duplicates.push(temp);
    } else {
      table.set(temp, true);
    }
  }
  return duplicates;


};

module.exports = treeIntersection;
