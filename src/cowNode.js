// All helper methods needs to get our custom List more possibility for scaling
class List {
  constructor() {
    this.head = new Cow(null, 0, "Unkillable Cow");
    this.length = 1;
    this.newCows = 0;
    this.diedCows = 0;
  }

  giveBirth(parent, id, name) {
    // Id must be unique
    if (this.getIndexOfById(id) !== -1) {
      return "This id already used";
    }
    let node = new Cow(parent, id, name);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Cow(parent, id, name);
    }
    this.newCows++;
    this.length++;
  }

  // helper method, might be removed without func decline
  insertInPosition(position, parent, id, name) {
    if (position < 0 || position > this.length) {
      return "Incorrect value of position";
    }
    // Id must be unique
    if (this.getIndexOfById(id) !== -1) {
      return "This id already used";
    }
    let node = new Cow(parent, id, name);
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

  // helper method, might be removed without func decline
  getCowByPosition(position) {
    if (position < 0 || position > this.length) {
      return "Incorrect value of position";
    }

    let current = this.head;
    let index = 0;

    while (index < position) {
      current = current.next;
      index++;
    }

    return current.value;
  }

  // helper method, might be removed without func decline
  removeFromPosition(position) {
    if (position < 0 || position > this.length) {
      return "Incorrect value of position";
    }
    // First cow on farm is unkillable
    if (position === 0) return "This cow must be always alive!";

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
    this.diedCows++;
    this.length--;
    return current.value;
  }

  getIndexOfById(id) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.id === id) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  endLife(id) {
    // First cow on farm is unkillable
    if (id === 0) return "This cow must be always alive!";
    return this.removeFromPosition(this.getIndexOfById(id));
  }

  // helper method, might be removed without func decline
  isEmpty() {
    return this.length === 0;
  }

  // helper method, might be removed without func decline
  getLength() {
    return this.length;
  }

  print() {
    console.log("Current alive cows:");
    let current = this.head;
    while (current) {
      console.log(
        `'${current.name}' with id ${current.id} and parent id ${current.parent}`
      );
      current = current.next;
    }
    console.log(
      `Total counts from farm creating:\nNew cows: ${
        this.newCows
      }\nDied cows: ${this.diedCows}\nGrowth/decline: ${
        this.newCows - this.diedCows
      }`
    );
  }
}

class Cow {
  constructor(parent, id, name) {
    this.name = name;
    this.id = id;
    this.parent = parent;
    this.next = null;
  }
}

module.exports = new List();
