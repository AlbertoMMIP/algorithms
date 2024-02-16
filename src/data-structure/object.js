import HashTable from "./HashTable.js";

function init () {
  console.log('This is an hash table section');
  const myHashTable = new HashTable(2);
  myHashTable.set('grapes', 10000);
  myHashTable.set('apples', 5000);
  myHashTable.set('oranges', 5000);
  const grapes = myHashTable.get('grapes');
  const apples = myHashTable.get('apples');
  console.log('grapes', grapes);
  console.log('apples', apples);
  console.log('keys', myHashTable.keys());
}

export {
  init,
}