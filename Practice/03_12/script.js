/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

//import Backpack from "../../03_10/Backpack";
//import Home from "./Home";
import Home from "./Home.js";
import Backpack from "./Backpack.js";

const newHome = new Home("House1", "WHite", "INDIA", false);

console.log("newHouse object: ", newHome);
console.log("newHouse object color: ", newHome.color);
console.log("newHouse kitchen Modular: ", newHome.isKitchenModular);

newHome.updatedKitchenValue(true);
console.log("newHouse kitchen Modular: ", newHome.isKitchenModular);

console.log(
  "getModularKitchenValue method called",
  newHome.getModularKitchenValue()
);

const newBackpack = new Backpack("luis", "big", "green", 15, 30, 40, false);

console.log("newBackpack object:", newBackpack);
console.log("newBackpack color: ", newBackpack.color);
console.log("newBackpack lidOpen before: ", newBackpack.lidOpen);

newBackpack.toggleLid(true);
console.log("newBackpack lidOpen after: ", newBackpack.lidOpen);
