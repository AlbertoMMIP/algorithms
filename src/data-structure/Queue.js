class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek () {
    return this.first;
  }
  enqueue (value) {
    const newValue = new Node(value);
    if (!this.length) {
      this.first = newValue;
      this.last = newValue;
    } else { // This is not assign. THESE ARE POINTERS 
      this.last.next = newValue;
      this.last = newValue;
    }
    this.length++;
  }
  dequeue () {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null
    }
    const value = this.first.value;
    this.first = this.first.next;
    this.length--;
    return value;
  }
  isEmpty () {
    return this.length === 0;
  }
}

function init() {
  const myQueue = new Queue();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.enqueue('Samir');

  console.log('My queue::', myQueue);
  console.log('My queue peek::', myQueue.peek());
  console.log('My queue dequeue::', myQueue.dequeue());
  console.log('My queue dequeue::', myQueue.dequeue());
  console.log('My queue dequeue::', myQueue.dequeue());
  console.log('My queue dequeue::', myQueue.dequeue());
  console.log('My queue isEmpty::', myQueue.isEmpty());
  console.log('My queue::', myQueue);
}

export {
  init,
}