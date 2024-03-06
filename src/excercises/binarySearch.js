// Find the number 78 inside of an sorted array
// 

function binarySearch (array, numberToFind) {
  // console.log(`Looking ${numberToFind} inside of`, array);
  let init = 0;
  let end = array.length;
  let medium = 0;
  while (init < end) {
    medium = init + Math.floor((end-init)/2);
    // console.log(`Init ${init} and end ${end} comparing position ${medium} and value ${array[medium]} with ${numberToFind}`);
    if (array[medium] < numberToFind) {
      init = medium + 1;
    } else if (array[medium] > numberToFind) {
      end = medium - 1;
    } else {
      return medium;
    }
  }
  return -1;
}



function init () {
  const originalArray = [2, 3, 5, 7, 9, 11, 13, 15, 17, 18, 21, 22, 25, 27, 29, 38, 77];
  const numberToFind = 79;
  const indexOfNumber = binarySearch(originalArray, numberToFind);
  console.log(`Index of ${numberToFind} is ${indexOfNumber}`);
}

export {
  init,
}

