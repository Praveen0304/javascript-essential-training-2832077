/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

// New Objects
const weekendPack = new Backpack("New Name", 31, "red", 14, 30, 30, true);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

console.log("the newBackPack:", weekendPack);
console.log("The pocketNum value:", weekendPack.pocketNum);
