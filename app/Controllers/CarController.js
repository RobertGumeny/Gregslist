import _carService from "../Services/CarService.js"
import _store from "../store.js"

function _drawCars(){
  let template = ''
  let cars = _store.State.cars

  cars.forEach((car, index) => template += car.getTemplate(index))
  document.getElementById("car-display").innerHTML = template
}

export default class CarController {

  constructor(){
    console.log("Car Controller is linked")
    _drawCars()
  }

  listCar(event){
    event.preventDefault()
    let formData = event.target
    let newCarObject = {
      make: formData.make.value,
      model: formData.model.value,
      year: formData.year.value,
      price: formData.price.value,
      description: formData.description.value,
      imgUrl: formData.imgUrl.value,
    }

    _carService.listCar(newCarObject)
    formData.reset()
    // @ts-ignore
    $('#list-car-modal').modal('toggle')
    _drawCars()
  }

  delete(index){
    _carService.delete(index)
    _drawCars()
  }
}