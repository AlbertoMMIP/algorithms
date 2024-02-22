import LinkedList from "./LinkedList.js";

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
  init
}