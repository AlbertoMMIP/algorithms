import MyArray from "./MyArray.js";

function init () {
  console.log('This is an array section');
  const newArray = new MyArray();
  newArray.push('hi');
  newArray.push('you');
  newArray.push('!');
  newArray.delete(2);
  console.log('newArray', newArray);
  console.log('newArray', newArray.get(0));
}

export {
  init,
}