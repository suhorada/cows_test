class List {
  constructor(value) {
    this.head = value || null;
    this.arrayLength = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.arrayLength === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.arrayLength++;
  }

  insertInPosition(position, value) {
    if (position < 0 || position > this.arrayLength) {
      return "Incorrect value of position";
    }
    let node = new Node(value);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let { prev } = this.runToPosition(position, current);
      prev.next = node;
      node.next = current;
    }

    this.arrayLength++;
  }

  getNodeByPosition(position) {
    if (position < 0 || position > this.arrayLength) {
      return "Incorrect value of position";
    }
    let current = this.head;
    let index = 0;
    while (index < position) {
      current = current.next;
      index++;
    }
    return current.data;
  }

  removeFromPosition(position) {
    if (position < 0 || position > this.arrayLength) {
      return "Incorrect value of position";
    }
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let { prev } = this.runToPosition(position, current);
      prev.next = current.next;
    }
    this.arrayLength--;
    return current.data;
  }

  runToPosition(position, current) {
    let prev = null;
    let index = 0;
    while (index < position) {
      prev = current;
      current = current.next;
      index++;
    }
    return { prev, current };
  }

  getIndexOfById(id) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.data.id === id) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  get length() {
    return this.arrayLength;
  }

  find(cb) {
    let current = this.head;
    for (let i = 0; i < this.arrayLength; i++) {
      if (cb(current.data)) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

  forEach(cb) {
    let current = this.head;
    while (current !== null) {
      cb(current.data);
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current);
      current = current.next;
    }
  }

  filter(cb) {
    let onHead = true;
    let current = this.head;
    let prev = this.head;
    while (current.next !== null) {
      if (cb(current.data) && onHead) {
        current = current.next;
        onHead = false;
      } else if (cb(current.data)) {
        current = current.next;
        prev = prev.next;
      } else {
        current = current.next;
        prev.next = current;
        this.arrayLength--;
      }
    }

    return this;
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

module.exports = List;
