/** 
Create Doubly Linked List
Create Traverse Back
Create Delete at Index
Create Delete Value (First Occurence)

*/

class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  /**
   * Adds a new node to the end of the Linked List
   * @param {number} value
   * @returns {DoublyLinkedList} this
   */
  append(value) {
    // Create new Node
    const newNode = new DoublyLinkedListNode(value);
    // Add the new node to the tail next pointer
    this.tail.next = newNode;
    // Update the previous value of the new node to the tail
    newNode.prev = this.tail;
    // Change the tail to equal the new node
    this.tail = newNode;
    // Increase Length
    this.length += 1;

    // Return Linked List
    return this;
  }

  /**
   * Adds a new node to the beginning of the list
   * @param {number} value
   * @returns {DoublyLinkedList} this
   */
  prepend(value) {
    // Create the new node
    const newNode = new DoublyLinkedListNode(value);
    // Make the new node next value point to the current head node
    newNode.next = this.head;
    // Make the current head node prev value point to the new node
    this.head.prev = newNode;
    // Change the head node to the newly created node
    this.head = newNode;
    // Increase Length
    this.length += 1;

    // Return Linked List
    return this;
  }

  /**
   * Inserts a new node at the specified index.
   * This starts from the head node
   * @param {Number} index
   * @param {Number} value
   * @returns {DoublyLinkedList} this
   */
  insert(index, value) {
    // Create new node to insert
    const newNode = new DoublyLinkedListNode(value);
    // Check if index is greater than the number of nodes in list
    if (index >= this.length) {
      this.append(value);
      return this;
    }
    // Get the leading node
    let leadingNode = this.traverse(index - 1);
    // Point the new node previous value to the leading node
    newNode.prev = leadingNode;
    // Get the node after the leading node
    let followingNode = leadingNode.next;
    // Point the next node after the leading node to the newly created node. This breaks the link
    // to the following node
    leadingNode.next = newNode;
    // Point the new node next value to the node after the leading node to regain link
    newNode.next = followingNode;
    // Point the following node previous value to the newly created node
    followingNode.prev = newNode;
    // Increase length
    this.length += 1;

    // Return Linked List
    return this;
  }

  /**
   * Returns the Node at the specified index.
   * This starts from the head node
   * @param {Number} index
   * @returns {DoublyLinkedListNode} DoublyLinkedListNode
   */
  traverse(index) {
    let counter = 0;
    let currentNode = this.head;
    if (index === 0) {
      return this.head;
    }
    while (counter < index) {
      currentNode = currentNode.next;
      counter += 1;
    }
    return currentNode;
  }

  /**
   * Returns node at the specified index in the list.
   * The starts from the tail
   * @param {Number} index
   * @returns {DoublyLinkedListNode} DoublyLinkedListNode
   */
  traverseBack(index) {
    let counter = 0;
    let currentNode = this.tail;
    if (index === 0) {
      return this.tail;
    }
    while (counter < index) {
      currentNode = currentNode.prev;
      counter += 1;
    }

    return currentNode;
  }

  /**
   * Deletes a node at a specified index and return the deleted node
   * @param {Number} index
   * @returns {DoublyLinkedListNode}
   */
  deleteAtIndex(index) {
    if (index === 0) {
      const removedNode = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return removedNode;
    }

    // Get the Leading node
    let leadingNode = this.traverse(index - 1);
    // Get the unwanted node
    const unwantedNode = leadingNode.next;
    // Get the node after the unwanted node
    const followingNode = unwantedNode.next;
    // Point the leading node next value to the node after the unwanted node
    leadingNode.next = followingNode;
    // Point the following node prev value to equal the leading node
    followingNode.prev = leadingNode;
    // Decrease node
    this.length -= 1;
    // return deleted node;
    return unwantedNode;
  }

  /**
   * Returns all the value in the Linked List in an array
   * @returns {Array}
   */
  printList() {
    const nodeArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      nodeArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodeArray;
  }
}

const myLinkedList = new DoublyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.prepend(0);
myLinkedList.prepend(10);
// console.log(myLinkedList.printList());
// console.log("front", myLinkedList.traverse(2));
// console.log("back", myLinkedList.traverseBack(1));
myLinkedList.insert(1, 100);
console.log(myLinkedList.printList());
console.log("deleted node", myLinkedList.deleteAtIndex(1));
console.log(myLinkedList);
