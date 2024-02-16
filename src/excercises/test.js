
function biggestNumber (array) {
  let biggest = 0;
  for (const c of array) {
    if (biggest < c) biggest = c
  }
  return biggest;
}

function biggestNumberOptionII (array) {
  return array.reduce((pV, cV) => pV < cV ? cV : pV, 0 );
}

function biggestNumberOptionIII (array) {
  const sortArray = array.sort((a, b) => b-a)
  return sortArray[0]
}

function iterateChildrenArray (parentArray, childArray) {
  childArray.forEach(item => {
    if (Array.isArray(item)) {
      parentArray = iterateChildrenArray(parentArray, item)
    } else {
      parentArray.push(item)
    }
  });
  return parentArray;
}

function flatArray(multiArray) {
  let flatArray = [] 
  multiArray.forEach(item => {
    if(Array.isArray(item)) flatArray = iterateChildrenArray(flatArray, item);
    else flatArray.push(item);
  })
  return flatArray;
}

function burbleSort (array) {
  for (let i = 0 ; i < array.length ; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      const itemJ = array[j];
      const itemJN = array[j+1];
      if (itemJ > itemJN) {
        let temp = itemJ
        array[j] = itemJN
        array[j + 1] = temp
      }
    }
  }
  return array;
}

function main () {
  console.log('Start testing');
  const nonSortNumbers = [1,2,3,6,5,4,7,8,9,6,5,4,1,[12,3,46,7,8,90,6,54,34,54,546,5378,6876,98],23,36,5,4,7,896,3,[3,32,54,3,6,576,4,3,234,43,7698,9,6,45,43,2,2,1],25,5,6,632,5,56,6,5,5,6,5,5,6,2,25,9];
  const arrayNumbers = flatArray(nonSortNumbers);
  const newArray = burbleSort(arrayNumbers);
  console.log('newArray', newArray);
  // const biggest = biggestNumber(arrayNumbers);
  // console.log('biggest item is', biggest);
  // const biggestII = biggestNumberOptionII(arrayNumbers);
  // console.log('biggestII item is', biggestII);
  // const biggestIII = biggestNumberOptionIII(arrayNumbers);
  // console.log('biggestIII item is', biggestIII);
}

main();