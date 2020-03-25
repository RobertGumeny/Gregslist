import _homeService from "../Services/HomeService.js"
import _store from "../store.js"

function _drawHomes(){
  let template = ''
  let homes = _store.State.homes

  homes.forEach((home, index) => template += home.getTemplate(index))
  document.getElementById("home-display").innerHTML = template
}
export default class HomeController {

  constructor(){
    console.log("Home Controller is linked")
    _drawHomes()
  }

  listHome(event){
    event.preventDefault()
    let formData = event.target
    let newHomeObject = {
      location: formData.location.value,
      beds: formData.beds.value,
      baths: formData.baths.value,
      sqft: formData.sqft.value,
      acres: formData.acres.value,
      price: formData.price.value
    }

    _homeService.listHome(newHomeObject)
    formData.reset()
    // @ts-ignore 
    $('#list-home-modal').modal('toggle')
    _drawHomes()
  }

  delete(index) {
    _homeService.delete(index)
    _drawHomes()
  }
}