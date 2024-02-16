// Function that get the first item repeted;
// input: [2,5,1,2,3,5,1,2,4]
// output: 2

function findItemRepeted (array) {
  // Dont forget validate the input
  if (!array || array.length < 2 || !Array.isArray(array)){
    return 'mmm that is not valid';
  }
  const tempItems = {}
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (tempItems[item]) {
      return item
    } else {
      tempItems[item] = true
    }
  }
  return undefined;
}


function init () {
  // const input = [2,5,1,2,3,5,1,2,4];
  const input = [2,5,5,2,3,5,1,2,4];
  // const input = [2,1,1,2,3,5,1,2,4];
  // const input = [2,3,4,5];
  const itemRepeted = findItemRepeted(input);
  console.log(`First item repeted is: ${itemRepeted}`);
}


export {
  init,
}