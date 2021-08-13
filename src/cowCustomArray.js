class myArray {
  constructor() {
    this.array = {};
    this.length = 0;
  }

  push(data) {
    this.array[this.length] = data;
    this.length++;
  }

  findIndexOfById(id) {
    
  }

  removeByIndex(index) {}

  getData() {
    return this.array;
  }
}

class Farm {
  constructor() {
    this.cows = new myArray();
    this.diedCows = 0;
  }

  giveBirth(parent, id, name) {
    const cow = new Cow(parent, id, name);
    this.cows.push(cow);
  }

  endLife(id) {}

  print() {
    const data = this.cows.getData();
    console.log(
      `\nNow at farm ${this.length} cows\nDied all the time ${this.diedCows}\n\nAll cows now:`
    );
    for (let key in data) {
      console.log(
        `Name '${data[key].name}', id ${data[key].id} ${
          data[key].parent !== null
            ? `with parent id ${data[key].parent}`
            : ""
        }`
      );
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
