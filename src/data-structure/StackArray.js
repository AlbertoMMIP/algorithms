class StackArray {
  constructor () {
    this.top = [];
  }

  peek () {
    return this.top[this.top.length-1];
  }
  push (value) {
    this.top.push(value);
  }
  pop () {
    const value = this.top.pop();
    return value;
  }
  isEmpty () {
    return this.top.length === 0;
  }
}

function init() {
  const myStack = new StackArray();
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