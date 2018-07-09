'use strict';

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  append(val) { //Big 0(1)

    const newNode = new LinkedListNode(val);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    var currentNode = this.head;

    while(currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  //if your adding a new head then we need to re-adjust the current value of the current head, setting the link list  head to the new head, and setting th eold head to the old head's next

  prepend(val, newVal) { //Big 0(1)
    var newNode = new LinkedListNode(newVal);
    var currentNode = this.head;
    while(currentNode.next.value !== val) {
      currentNode = currentNode.next;

    }
      
    //code below ensures that the new next points to the old next, making it so we don't lose all the other nodes after because the constructor is set up to to make the next node null
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return this;
  }

  // reverse a linked list  
  reverse() { // Big O(n)
    let currentNode = this.head;
    let nextNode = null;
    let prevNode = null;
        
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    return this;
  };

}

// remove(list, value){ // Big O(1)
//     if(this.head.value === value){
//       this.head = this.head.next;
//     }
//     let prevNode = this.head;
//     let currentNode = this.head.next;
//     while(currentNode){
//       if(currentNode.value === value){
//         prevNode.next = currentNode.next;
//         currentNode = currentNode.next;
//         break;
//       }
//       prevNode = currentNode;
//       currentNode = currentNode.next;
// save next or you lose it!!!
//var save = node.next;
// reverse pointer
//node.next = previous;
// increment previous to current node
//previous = node;
// increment node to next node or null at end of list
//node = save;
    
//return previous;   // Change the list head !!!
  

//linkedlist = reverseLinkedList(linkedlist);

  
module.exports = LinkedList;
    
    




   