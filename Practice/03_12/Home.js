/**
 * New Home class
 *
 */

class Home {
  constructor(name, color, locationStr, isKitchenModular) {
    this.name = name;
    this.color = color;
    this.locationStr = locationStr;
    this.isKitchenModular = isKitchenModular;
  }

  // Method to update the kitchenModular value
  updatedKitchenValue(value) {
    this.isKitchenModular = value;
  }

  getModularKitchenValue() {
    return this.isKitchenModular;
  }
}

export default Home;
