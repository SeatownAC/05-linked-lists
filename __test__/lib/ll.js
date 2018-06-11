'use strict';

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

class LinkedList {

    constructor() {
      this.head = null;
    }


    append(val) {

    const newNode =newNode(val);

    if (!this.head) {
        this.head = newNode;
        return this;
    }

    var currentNode = this.head;

    while(currentNode.next !== null) {
        currentNode = currentNode.next;
    }

    currentNode.next = newNode;

     //if your adding a new head then we need to re-adjust the current value of the current head, setting the link list  head to the new head, and setting th eold head to the old head's next

    prepend(val, newVal) {
        var newNode = newNode(newVal);
        var currentNode = this.head;
        while(currentNode.next.val !== value) {
            currentNode = currentNode.next;

        }
        //code below ensures that the new next points to the old next, making it so we don't lose all the other nodes after because the constructor is set up to to make the next node null
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return this;

        // reverse a linked list  
    reverse(val, newVal) {
    var newNode = newNode(newVal);
    // var previous = null;
  
    // while(node) {
      // save next or you lose it!!!
      //var save = node.next;
      // reverse pointer
      //node.next = previous;
      // increment previous to current node
      //previous = node;
      // increment node to next node or null at end of list
      //node = save;
    }
    //return previous;   // Change the list head !!!
  }
  //linkedlist = reverseLinkedList(linkedlist);
    
    




    module.exports = LinkedList;