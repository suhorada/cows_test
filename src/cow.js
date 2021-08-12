class Farm {
  allCows = [{ id: 0, name: "Unkillable" }];
  newCows = 0;
  diedCows = 0;

  giveBirth(parentId, childId, childName) {
    if (this.allCows.find((el) => el.id === childId)) {
      console.log("This Id is already exists");
    } else if (!this.allCows.find((el) => el.id === parentId)) {
      console.log("This parent id is wrong");
    } else {
      this.allCows.push({
        name: childName,
        parentId,
        id: childId,
      });
      this.newCows++;
      console.log(`Cow '${childName}' created with parent id ${parentId}`);
    }
  }

  endLife(id) {
    if (id === 0) {
      console.log("This cow unkillable");
    } else {
        const lengthBefore = this.allCows.length;
        this.allCows = this.allCows.filter((el) => el.id !== id);
      if(lengthBefore !== this.allCows.length) {
        this.diedCows++;
      } else {
        console.log("Cow not found");
      }
    }
  }

  print() {
    console.log("All cows on this moment:");
    this.allCows.forEach((cow) =>
      console.log(
        `'${cow.name}, with id ${cow.id} and parent id ${cow.parentId}`
      )
    );
    let growth = 0;
    growth = this.newCows - this.diedCows;
    console.log(
      `Was born ${this.newCows} cows, died ${this.diedCows}, total growth/decline ${growth}`
    );
  }
}

module.exports = new Farm();

// Farm.add(0, 1, 'Cow 1');
// Farm.add(0, 2, 'Cow 2');
// Farm.add(2, 3, 'Cow 3');
// Farm.kill(1);
// Farm.kill(0);
// Farm.report(0, 50);
