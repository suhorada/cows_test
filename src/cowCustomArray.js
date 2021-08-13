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
    console.log("LOG: Push done");
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

  filter(cb) {
    for(let key in this.array) {
      if(!cb(this.array[key])) {
        delete this.array[key];
      }
    }
    return this;
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

module.exports = ObjectBasedArray;
