// using array ---------------------------
// const Farm = require("./cow.js");
// const farm = new Farm();

// farm.giveBirth(0, 1, "Cow1");
// farm.giveBirth(0, 2, "Cow2");
// farm.giveBirth(1, 3, "Cow3");
// farm.endLife(2);
// farm.print();
// using array ---------------------------

// without arrays ---------------------------
const Farm = require('./cowNode.js');
const farm = new Farm();

farm.giveBirth(null, 0, 'Immortal');
farm.giveBirth(0, 1, 'Cow1');
farm.giveBirth(1, 2, 'Cow2');
farm.giveBirth(2, 3, 'Cow3');
farm.endLife(1);
farm.endLife(0);
farm.print();
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