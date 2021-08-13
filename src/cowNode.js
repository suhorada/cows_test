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
      while (current.next !== null) {
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
      let { prev } = this.runToPosition(position, current);
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
      let { prev } = this.runToPosition(position, current);
      prev.next = current.next;
    }
    this.length--;
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

  getLength() {
    return this.length;
  }

  print() {
    let current = this.head;
    while (current !== null) {
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
      console.log("LOG: This id already used");
      return false;
    }
    let cow = new Cow(parent, id, name);
    this.cows.addToTheEnd(cow);
    console.log("LOG: A new cow is born");
  }

  endLife(id) {
    // First cow on farm is unkillable
    if (id === 0) {
      console.log("LOG: This cow must be always alive!");
      return false;
    }
    this.cows.removeFromPosition(this.cows.getIndexOfById(id));
    console.log(`LOG: Cow with Id ${id} died :(`);
    this.diedCows++;
    return true;
  }

  print() {
    let current = this.cows.head;
    console.log(
      `\nNow at farm ${this.cows.length} cows\nDied all the time ${this.diedCows}\n\nAll cows now:`
    );
    while (current) {
      console.log(
        `Name '${current.data.name}', id ${current.data.id} ${current.data.parent !== null ? `with parent id ${current.data.parent}` : ''}`
      );
      current = current.next;
    }
  }
}

class Cow {
  constructor(parent, id, name) {
    this.name = name;
    this.id = id;
    this.parent = parent;
    this.sex = "Female";
  }
}

module.exports = Farm;
