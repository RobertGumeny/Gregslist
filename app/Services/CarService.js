import Car from "../Models/Car.js";
import _store from "../store.js";

//Public
class CarService {
  delete(index){
    _store.State.cars.splice(index, 1)
  }
  listCar(newCarObject){
    let newCar = new Car(newCarObject)
    _store.State.cars.push(newCar)
  }


  constructor(){
    console.log("Car Service is Linked")
  }
}

const CARSERVICE = new CarService();
export default CARSERVICE;
