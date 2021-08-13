const Farm = require("./farm.js");

let ArrayFarm = new Farm();
let ListFarm = Farm.list();
let ObjectFarm = Farm.object();

ArrayFarm.giveBirth(null, 0, "Immortal");
ArrayFarm.giveBirth(0, 1, "Cow1");
ArrayFarm.giveBirth(1, 2, "Cow2");
ArrayFarm.endLife(0);
ArrayFarm.endLife(1);
ArrayFarm.print();

// ListFarm.giveBirth(null, 0, "Immortal");
// ListFarm.giveBirth(0, 1, "Cow1");
// ListFarm.giveBirth(1, 2, "Cow2");
// ListFarm.endLife(0);
// ListFarm.endLife(1);
// ListFarm.print();

// ObjectFarm.giveBirth(null, 0, "Immortal");
// ObjectFarm.giveBirth(0, 1, "Cow1");
// ObjectFarm.giveBirth(1, 2, "Cow2");
// ObjectFarm.endLife(0);
// ObjectFarm.endLife(1);
// ObjectFarm.print();
