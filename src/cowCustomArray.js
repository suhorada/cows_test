class ObjectBasedArray {
  constructor() {
    this.array = {};
    this.arrayLength = 0;
  }

  push(data) {
    if (data.id in this.array) {
      console.log('LOG: This id already used'); 
      return false;
    }
    this.array[this.arrayLength] = data;
    this.arrayLength++;
    console.log("LOG: A new cow is born");
  }

  getIndexOfById(id) {
    let index = 0;
    for (let key in this.array) {
      if (Number(this.array[key].id) === id) {
        return index;
      }
      index++;
    }
    return -1;
  }

  removeByIndex(index) {
    if (this.array[index] !== undefined) {
      delete this.array[index];
      console.log(`LOG: Deleted ${index}`);
    } else {
      console.log("LOG: This index not found");
    }
  }

  find(cb) {
    for(let key in this.array) {
      if(cb(this.array[key])) {
        return this.array[key];
      }
    }
    return null;
  }

  forEach(cb) {
    for(let key in this.array) {
      cb(this.array[key]);
    }
  }

  get data() {
    return this.array;
  }

  get length() {
    return this.arrayLength;
  }
}

class Farm {
  constructor() {
    this.cows = new ObjectBasedArray();
    this.diedCows = 0;
  }

  giveBirth(parent, id, name) {
    const cow = new Cow(parent, id, name);
    this.cows.push(cow);
  }

  endLife(id) {
    if (id === 0) {
      console.log('This cow is Immortal');
    } else if (this.cows.getIndexOfById(id) !== -1) {
      this.cows.removeByIndex(this.cows.getIndexOfById(id));
      console.log(`LOG: Cow with id ${id} died :(`)
    } else {
      console.log(`LOG: Cow with id ${id} not found`)
    }
  }

  print() {
    const data = this.cows.data;
    console.log(
      `\nNow at farm ${this.arrayLength} cows\nDied all the time ${this.diedCows}\n\nAll cows now:`
    );
    for (let key in data) {
      console.log(
        `Name '${data[key].name}', id ${data[key].id} ${
          data[key].parent !== null ? `with parent id ${data[key].parent}` : ""
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

// module.exports = Farm;
module.exports = ObjectBasedArray;
