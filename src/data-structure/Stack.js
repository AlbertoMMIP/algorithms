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
    } else {
      newValue.next = this.top;
      this.top = newValue;
    }
    this.length++;
  }
  pop () {
    if (!this.top) return null;
    if (this.top === this.bottom) {
      this.bottom = null
    }
    const tmp = this.top.next;
    const value = this.top.value;
    this.top = tmp;
    this.length--;
    return value;
  }
  isEmpty () {
    return this.length === 0;
  }
}

function init() {
  const myStack = new Stack();
  myStack.push('Google');
  myStack.push('Udemy');
  myStack.push('Discord');

  console.log('My stack::', myStack);
  console.log('My stack peek::', myStack.peek());
  console.log('My stack pop::', myStack.pop());
  console.log('My stack pop::', myStack.pop());
  console.log('My stack pop::', myStack.pop());
  console.log('My stack isEmpty::', myStack.isEmpty());
  console.log('My stack::', myStack);
}

export {
  init,
}