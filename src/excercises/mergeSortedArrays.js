// Function that merge and sort two arrays
// input: [0, 3, 4, 31], [4, 6, 30]
// output: [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays (arrayA, arrayB) {
  // Dont forget validate the input
  if (!arrayA || arrayA.length < 1 || !Array.isArray(arrayA) ||
      !arrayB || arrayB.length < 1 || !Array.isArray(arrayB)){
    return 'mmm inputs are not valid';
  }
  return [ ...arrayA, ...arrayB].sort((a, b) => (a-b))
}

function mergeSortedArrays2 (arrayA, arrayB) {
  // Dont forget validate the input
  if (!arrayA || arrayA.length < 1 || !Array.isArray(arrayA) ||
      !arrayB || arrayB.length < 1 || !Array.isArray(arrayB)){
    return 'mmm inputs are not valid';
  }
  const maxLenght = arrayA.length + arrayB.length;
  const mergedArray = []
  let indexA = 0;
  let indexB = 0;
  for (let i = 0; i < maxLenght; i++) {
    const itemA = arrayA[indexA];
    const itemB = arrayB[indexB]; 
    if (itemA < itemB || !itemB) {
      mergedArray.push(itemA);
      indexA++;
    } else {
      mergedArray.push(itemB);
      indexB++;
    }
  }
  return mergedArray;
}


function init () {
  const mergeArrays = mergeSortedArrays2([0, 3, 4], [4, 6, 30, 31]);
  console.log(`Merged array is:: ${mergeArrays}`);
}


export {
  init,
}