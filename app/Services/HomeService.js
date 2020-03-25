import Home from "../Models/Home.js";
import _store from "../store.js";

//Public
class HomeService {
  delete(index){
    _store.State.homes.splice(index, 1)
  }

  listHome(newHomeObject){
    let newHome = new Home(newHomeObject)
    _store.State.homes.push(newHome)
  }
  constructor(){
    console.log("Home Service is Linked")
  }
}

const HOMESERVICE = new HomeService();
export default HOMESERVICE;
