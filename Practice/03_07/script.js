/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

/**
 * house object comments
 */
const house = {
  number: 3086,
  /**color object for house */
  color: "White",
  stairsCount: 50,

  kitchen: {
    color: "Red",
    isModular: true,
  },

  newStairsCount: function (count) {
    this.stairsCount = count;
    console.log("new staris count:", this.stairsCount);
  },
};

console.log("House Object:", house);
console.log("House Color:", house.color);
console.log("House Kitch color:", house.kitchen.color);
house.newStairsCount(90);
