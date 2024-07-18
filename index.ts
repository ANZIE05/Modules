// import variable

import {work} from "./calculator.js";
console.log(work);

// import function add()

import { add, addDone } from "./addition.js";
console.log(add(4, 6));
// import variable(we can import another variable/function separately or can import in one file with multiple named in {} )
// import { addDone } from "./addition.js";
console.log(addDone);

// import function sub()

import { sub } from "./subtraction.js";
console.log(sub(10, 5));

// import "Default export"(we dont need to give exact variable name in it, we can give any name to it and no need to put {} as well for default exporting)

import multiplicationNo from "./addition.js"
console.log(multiplicationNo(5,2));

// import "Default export"(we can do multiple "default imports" in one file)
import divisionNo from "./subtraction.js"
console.log(divisionNo(40,2));