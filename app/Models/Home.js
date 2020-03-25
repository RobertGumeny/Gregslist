export default class Home{
  constructor(data){
    this.title =  data.title
    console.log("Home Model is linked")
  }

  get Template(){
    return this.title
  }
}
