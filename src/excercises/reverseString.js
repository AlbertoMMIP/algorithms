// Function that reverse a string;
// input: 'Hi my name is Alberto'
// output: 'otreblA si eman ym iH'

function reverse (string) {
  // Dont forget validate the input
  if (!string || string.length < 2 || typeof(string) !== 'string'){
    return 'mmm that is not valid';
  }
  return string.split('').reverse().join('');
}


function init () {
  const str = 'Hi my name is Alberto';
  const reverseStr = reverse(str);
  console.log(`Reverse string is: ${reverseStr}`);
}


export {
  init,
}