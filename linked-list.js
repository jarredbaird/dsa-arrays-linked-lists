/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (this.tail) {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    } else {
      this.head = new Node(val);
      this.tail = this.head;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (this.head) {
      const oldHead = this.head;
      this.head = new Node(val);
      this.head.next = oldHead;
    } else {
      this.head = new Node(val);
      this.tail = this.head;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (Object.is(this.head, this.tail)) {
      const oldTail = this.tail.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldTail;
    } else if (this.tail) {
      const oldTail = this.tail.val;
      let currentNode = this.head;
      while (currentNode.next) {
        if (currentNode.next.next === null) {
          currentNode.next = null;
          this.tail = currentNode;
          this.length -= 1;
          return oldTail;
        }
        currentNode = currentNode.next;
      }
    } else {
      return -1;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (Object.is(this.head, this.tail)) {
      const oldHead = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return oldHead;
    } else if (this.head) {
      const oldHead = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      return oldHead;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      if (i === idx) {
        return currentNode.val;
      } else {
        i += 1;
        currentNode = currentNode.next;
      }
    }
    return -1;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      if (i === idx) {
        currentNode.val = val;
        return;
      } else {
        i += 1;
        currentNode = currentNode.next;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx === this.length - 1) {
      this.push(val);
      return;
    }
    if (idx === 0) {
      this.unshift(val);
      return;
    }
    let currentNode = this.head;
    let newNode = new Node(val);
    let i = 0;
    while (currentNode) {
      if (i === idx - 1) {
        let oldIdx = currentNode;
        currentNode.next = newNode;
        newNode.next = oldIdx;
        this.length += 1;
        return;
      } else {
        i += 1;
        currentNode = currentNode.next;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
