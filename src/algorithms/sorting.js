export function init () {
  const array = [8, 7, 6, 4, 9, 5, 5, 1, 3, 2];
  // const sortArray = bubble(array);
  // const sortArray = selection(array);
  // const sortArray = insertion(array);
  const sortArray = mergeSort(array);
  console.log(`Sorting mergeSort answer is ${sortArray}`);
} 

function bubble (array) {
  if (!array) {
    console.log('Array param required');
    return;
  }
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

function selection (array) {
  if (!array) {
    console.log('Array param required');
    return;
  }
  for (let i = 0; i < array.length; i++) {
    let smallPosition = i;
    for (let j = i; j < array.length; j++) {      
      const small = array[smallPosition];
      const next = array[j + 1];
      if (small > next) {
        smallPosition = j + 1;
      }
    }
    const tmp = array [i];
    array[i] = array[smallPosition];
    array[smallPosition] = tmp;
  }
  return array;
}

function insertion (array) {
  if (!array) {
    console.log('Array param required');
    return;
  }
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (item < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        const orderItem = array[j];
        const beforeOrderItem = array[j-1];
        // find where number should go
        if (item > beforeOrderItem && item < orderItem) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i,1)[0]);
        }
        if (j === array.length) array.push(item);
      }
    }
  }
  return array;
}

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
 const result = [];
 let leftIndex = 0;
 let rightIndex = 0;
 while (leftIndex < left.length &&
        rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
 }
 console.log(left, right);
 return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}