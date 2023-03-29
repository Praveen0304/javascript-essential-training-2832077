/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];
console.log("Collection is: ", collection);

console.log("collection[2] before", collection[2]);
collection[2] = "new string item";
console.log("collection[2] after", collection[2]);
