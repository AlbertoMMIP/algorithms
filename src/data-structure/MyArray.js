class MyArray {
  constructor () {
    this.length = 0;
    this.data = {};
  }

  get (index) {
    return this.data[index];
  }

  push (item) {
    this.data[this.length] = item;
    this.length ++;
    return this.length;
  }

  pop () {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete (index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems (index) {
    if (index === this.length - 1) {
      delete this.data[this.length - 1];
      this.length--;
      return;
    }
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1];
      delete this.data[this.length - 1];
      this.length--;
    }
  }
}

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