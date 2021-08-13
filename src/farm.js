class Farm {
  constructor(type) {
    this.cows = new type();
    this.diedCows = 0;
  }

  giveBirth(parentId, childId, childName) {
    if (this.cows.find((el) => el.id === childId)) {
      console.log("LOG: This Id is already exists");
      return false;
    } else if (this.cows.length === 0) {
      this.cows.push(new Cow(null, childId, childName));
      return true;
    } else if (!this.cows.find((el) => el.id === parentId)) {
      console.log("LOG: This parent id is wrong");
      return false;
    } else {
      this.cows.push(new Cow(parentId, childId, childName));
      console.log(`LOG: Cow '${childName}' created with parent id ${parentId}`);
      return true;
    }
  }

  endLife(id) {
    if (id === 0) {
      console.log("LOG: This cow unkillable");
    } else {
      const lengthBefore = this.cows.length;
      this.cows = this.cows.filter((el) => el.id !== id);
      if (lengthBefore !== this.cows.length) {
        this.diedCows++;
        console.log(`LOG: Cow with id ${id} was died :(`);
      } else {
        console.log("LOG: Cow not found");
      }
    }
  }

  print() {
    console.log(
      `\nTotal data:\nWas born ${this.cows.length + this.diedCows} cows, died ${
        this.diedCows
      }, total growth/decline ${this.cows.length}`
    );
    console.log("\nAll cows on this moment:");
    this.cows.forEach((cow) =>
      console.log(
        `'${cow.name}', with id ${cow.id} and parent id ${cow.parentId}`
      )
    );
  }
}

class Cow {
  constructor(parent, id, name) {
    this.name = name;
    this.id = id;
    this.parentId = parent;
    this.sex = "Female";
  }
}

module.exports = Farm;
