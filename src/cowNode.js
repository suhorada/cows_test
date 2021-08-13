// All helper methods needs to get our custom List more possibility for scaling
class List {
  constructor(value) {
    this.head = value || null;
    this.length = 0;
  }

  addToTheEnd(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  insertInPosition(position, value) {
    if (position < 0 || position > this.length) {
      return "Incorrect value of position";
    }

    let node = new Node(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = node;
      node.next = current;
    }

    this.length++;
  }

  getNodeByPosition(position) {
    if (position < 0 || position > this.length) {
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
    if (position < 0 || position > this.length) {
      return "Incorrect value of position";
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.data;
  }

  getIndexOfById(id) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data.id === id) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  removeElementByValue(value) {
    return this.removeFromPosition(this.getIndexOf(value));
  }

  getLength() {
    return this.length;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Farm {
  constructor() {
    this.cows = new List();
    this.diedCows = 0;
  }

  giveBirth(parent, id, name) {
    // Id must be unique
    if (this.cows.getIndexOfById(id) !== -1) {
      return "This id already used";
    }
    let cow = new Cow(parent, id, name);
    this.cows.addToTheEnd(cow);
  }
}

class Cow {
  constructor(parent, id, name) {
    this.name = name;
    this.id = id;
    this.parent = parent;
  }
}

module.exports = Farm;
