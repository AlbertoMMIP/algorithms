class Node {
  constructor (value, prevValue) {
    this.value = value;
    this.next = null;
    this.prev = prevValue;
  }
}

export default class DoubleLinkedList {
  constructor (value) {
    this.head = {
      value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append (value) {
    let newValue = new Node(value, this.tail);
    this.tail.next = newValue;
    this.tail = newValue;
    this.length++;
  }

  prepend (value) {
    const newValue = new Node(value, null);
    this.head.prev = newValue;
    newValue.next = this.head;
    this.head = newValue;
    this.length++;
  }

  printList () {
    const array = [];
    let currentNode = this.head;
    while (currentNode.next !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    array.push(currentNode.value);
    return array;
  }

  insert (index, value) {
    if (index === 0) {
      this.prepend(value)
      return;
    }
    if (index >= this.length) {
      this.append(value)
      return;
    }
    const newNode = new Node(value, null);
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
  }

  traverseToIndex (index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      // console.log(`Index ${i} and value is ${currentNode.value}`);0
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove (index) {
    // TODO check params
    const leader = this.traverseToIndex(index-1);
    const prev = leader.prev
    leader.next.prev = prev;
    leader.next = leader.next.next;
    this.length--;
  }
}