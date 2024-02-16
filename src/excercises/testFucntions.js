export function init () {

  console.log(`Testing some doubts`);
  const array = [8, 7, 6, 4, 9, 5, 1, 3, 2];
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  console.log('Main array', array);
  console.log('left', left);
  console.log('right', right);
}