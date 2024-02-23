class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor (value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append (value) {
    const newValue = new Node(value);
    this.tail.next = newValue;
    this.tail = newValue;
    this.length++;
  }

  prepend (value) {
    const newValue = new Node(value);
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
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    newNode.next = leader.next;
    leader.next = newNode;
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
    leader.next = leader.next.next;
    this.length--;
  }

  reverse () {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    console.log(`First ${first.value}`);
    console.log(`Second ${second.value}`);
    while (second) {
      const temp = second.next;
      if (temp) console.log(`*********************`);
      if (temp) console.log(`Tempo ${temp.value}`);
      second.next = first;
      console.log(`Second ${second.value}`);
      first = second;
      console.log(`First ${first.value}`);
      second = temp;
      if (second) console.log(`New Second ${second.value}`);
    }
    this.head.next = null;
    this.head = first;
  }
}

function init () {
  const myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.append(316);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 4);
  myLinkedList.insert(42, 39);
  myLinkedList.remove(3);
  myLinkedList.reverse();
  console.log(myLinkedList.printList());
}

export {
  init,
}