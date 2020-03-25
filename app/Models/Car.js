export default class Car{
  constructor(data){
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.price = data.price
    this.description = data.description || "No description provided"
    this.imgUrl = data.imgUrl
  }

  getTemplate(index){
    return /*html*/ `
    <div class="col-3 border border-dark rounded">
    <h2>Make: ${this.make}</h2>
    <h5>Model: ${this.model}</h5>
    <h5>Year: ${this.year}</h5>
    <h5>Price: $${this.price}</h5>
    <p>${this.description}</p>
    <img class="img-fluid" src="${this.imgUrl}" />
    <button class="btn btn-danger btn-block" onclick="app.carController.delete(${index})">Remove Listing</button>
    </div>
    `
  }
}
