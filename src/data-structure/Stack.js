class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek () {
    return this.top;
  }
  push (value) {
    const newValue = new Node(value);
    if (this.length === 0) {
      this.top = newValue;
      this.bottom = newValue;
      return;
    }
    newValue.next = this.top;
    this.top = newValue;
    this.length++;
  }
  pop () {

  }
  isEmpty () {

  }
}

function init() {
  const myStack = new Stack();
  myStack.push('Google');

  console.log('My stack::', myStack);
}

export {
  init,
}