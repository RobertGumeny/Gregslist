import Car from "../Models/Car.js";
import store from "../store.js";

//Public
class CarService {
  constructor(){
    console.log("Car Service is Linked")
  }
}

const CARSERVICE = new CarService();
export default CARSERVICE;
