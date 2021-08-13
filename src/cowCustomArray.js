class myArray {
  constructor() {
    this.length = 0;
  }

  push(data) {

  }

  findIndexOfById(id) {

  }

  removeByIndex(index) {

  }
}

class Farm {
  constructor() {
    this.cows = new myArray();
    this.diedCows = 0;
  }

  giveBirth(parent, id, name) {

  }

  endLife(id) {

  }

  print() {
    
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