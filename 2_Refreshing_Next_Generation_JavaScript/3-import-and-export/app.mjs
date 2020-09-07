// import person from './person';
import prs from './person.mjs'; // imports default and ONLY export of the file person.js

import { baseData } from './utility.mjs';
import { capitalize } from './utility.mjs';

console.log(prs);
console.log(baseData);
console.log(capitalize("This is a normal cased text"));