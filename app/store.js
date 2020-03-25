import Car from "./Models/Car.js";
import Home from "./Models/Home.js";
import Job from "./Models/Job.js";

let _state = {
  values: [],
  /** @type {Car[]} */
  cars:[],
  /** @type {Home[]} */
  homes:[],
  /** @type {Job[]} */
  jobs:[]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
