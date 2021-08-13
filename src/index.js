// using array
// const Farm = require("./cow.js");

// Farm.giveBirth(0, 1, "Cow1");
// Farm.giveBirth(0, 2, "Cow2");
// Farm.giveBirth(1, 3, "Cow3");
// Farm.endLife(2);
// Farm.print();
// using array

// without arrays
const Farm = require('./cowNode.js');
const farm = new Farm();

farm.giveBirth(null, 0, 'Immortal');
farm.giveBirth(0, 1, 'Cow1');
farm.cows.print();
// farm.giveBirth(0, 2, 'Cow2');
// farm.giveBirth(1, 3, 'Cow3');
// farm.endLife(2);
// farm.print();
// without arrays
