export default class Home{
  constructor(data){
    this.location = data.location
    this.beds = data.beds
    this.baths = data.baths
    this.sqft = data.sqft
    this.acres = data.acres
    this.price = data.price
  }

  getTemplate(index){
    return /*html*/ `
    <div class="col-3 border border-dark rounded">
    <h2>${this.location}</h2>
    <h5>Bedrooms: ${this.beds}</h5>
    <h5>Bathrooms: ${this.baths}</h5>
    <h5>${this.sqft} Square Feet</h5>
    <h5>${this.acres} Acre Lot</h5>
    <h4>${this.price}</h5>
    <button class="btn btn-danger btn-block" onclick="app.homeController.delete(${index})">Remove Listing</button>
    </div>
    `
  }
}
