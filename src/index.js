// using array ---------------------------
// const Farm = require("./cow.js");
// const farm = new Farm();

// farm.giveBirth(null, 0, "Immortal");
// farm.giveBirth(0, 1, "Cow1");
// farm.giveBirth(0, 2, "Cow2");
// farm.giveBirth(1, 3, "Cow3");
// farm.endLife(2);
// farm.print();
// using array ---------------------------

// without arrays ---------------------------
// const Farm = require('./cowNode.js');
// const farm = new Farm();

// farm.giveBirth(null, 0, 'Immortal');
// farm.giveBirth(0, 1, 'Cow1');
// farm.giveBirth(1, 2, 'Cow2');
// farm.giveBirth(2, 3, 'Cow3');
// farm.endLife(1);
// farm.endLife(0);
// farm.print();
// without arrays ---------------------------

// using custom array ---------------------------
// const Farm = require("./cowCustomArray.js");
// const farm = new Farm();

// farm.giveBirth(null, 0, "Immortal");
// farm.giveBirth(0, 1, "Cow1");
// farm.giveBirth(0, 1, "Cow1");
// farm.giveBirth(1, 2, "Cow2");
// farm.endLife(1);
// farm.print();
// using custom array ---------------------------

const Farm = require("./farm.js");
const LinkedList = require('./cowNode.js');
const ObjectBasedArray = require("./cowCustomArray.js");

let ArrayFarm = new Farm(Array);
let ListFarm = new Farm(LinkedList);
let ObjectFarm = new Farm(ObjectBasedArray);

// ArrayFarm.giveBirth(null, 0, "Immortal");
// ArrayFarm.giveBirth(0, 1, "Cow1");
// ArrayFarm.giveBirth(1, 2, "Cow2");
// ArrayFarm.endLife(0);
// ArrayFarm.endLife(1);
// ArrayFarm.print();

ListFarm.giveBirth(null, 0, "Immortal");
ListFarm.giveBirth(0, 1, "Cow1");
ListFarm.giveBirth(1, 2, "Cow2");
ListFarm.endLife(0);
ListFarm.endLife(1);
ListFarm.print();

// ObjectFarm.giveBirth(null, 0, "Immortal");
// ObjectFarm.giveBirth(0, 1, "Cow1");
// ObjectFarm.giveBirth(1, 2, "Cow2");
// ObjectFarm.endLife(0);
// ObjectFarm.endLife(1);
// ObjectFarm.print();
