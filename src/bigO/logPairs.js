// O(n^2)
function init () {
  const boxes = ['a','b','c','d','e'];
  for (const i of boxes) {
    for (const a of boxes) {
      console.log(`Pairs:: ${i},${a}` );
    }
  }
}


export { init };