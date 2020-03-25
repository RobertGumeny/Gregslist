export default class Car{
  constructor(data){
    this.title =  data.title
    console.log("Car Model is linked")
  }

  get Template(){
    return this.title
  }
}
