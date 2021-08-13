class Farm {
  allCows = [{ id: 0, name: "Unkillable" }];
  newCows = 0;
  diedCows = 0;

  giveBirth(parentId, childId, childName) {
    if (this.allCows.find((el) => el.id === childId)) {
      console.log("LOG: This Id is already exists");
    } else if (!this.allCows.find((el) => el.id === parentId)) {
      console.log("LOG: This parent id is wrong");
    } else {
      this.allCows.push(new Cow(parentId, childId, childName));
      console.log(`LOG: Cow '${childName}' created with parent id ${parentId}`);
    }
  }

  endLife(id) {
    if (id === 0) {
      console.log("LOG: This cow unkillable");
    } else {
      const lengthBefore = this.allCows.length;
      this.allCows = this.allCows.filter((el) => el.id !== id);
      if (lengthBefore !== this.allCows.length) {
        this.diedCows++;
        console.log(`LOG: Cow with id ${id} was died :(`);
      } else {
        console.log("LOG: Cow not found");
      }
    }
  }

  print() {
    console.log(
      `\nTotal data:\nWas born ${this.allCows.length + this.diedCows} cows, died ${
        this.diedCows
      }, total growth/decline ${this.allCows.length}`
    );
    console.log("\nAll cows on this moment:");
    this.allCows.forEach((cow) =>
      console.log(
        `'${cow.name}, with id ${cow.id} and parent id ${cow.parentId}`
      )
    );
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
